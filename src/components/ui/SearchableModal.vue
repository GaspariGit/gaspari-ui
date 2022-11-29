<template>
    <Transition>
        <div class="custom-modal" v-show="isOpen">
            <div class="modal-background">
                <div class="modal-container">
                    <div class="modal-header">
                        <div class="modal-title">
                            Cerca
                        </div>
                        <div class="modal-close" @click="emitCloseModal">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" width="24px" height="24px">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                    </div>

                    <div class="modal-body">                    
                        <template v-if="searchables">
                            <div class="grid grid-cols-12 gap-6">
                                <div class="col-span-6" v-for="(item, index) in searchables.columns" :key="index">
                                    <!-- Input Text -->
                                    <template v-if="item.type === 'text'">
                                        <generic-input
                                            type="text"
                                            :placeholder="item.placeholder"
                                            :label="item.label"
                                            v-model="state[item.column]"
                                            :disabled="loadingState[item.column]"
                                        />
                                    </template>

                                    <!-- Select -->
                                    <template v-if="item.type === 'select'">
                                        <custom-select
                                            :options="optionsState[item.column] || []"
                                            :label="item.label"
                                            :name="item.column"
                                            :placeholder="item.placeholder"
                                            :disabled="loadingState[item.column]"
                                            v-model:value="state[item.column]"
                                            @change="handleChangeRelationsSelect(item.column, index)"                                           
                                        />
                                    </template>
                                </div>
                            </div>
                        </template>
                    </div>

                    <div class="modal-footer">
                        <div style="margin-right: 15px;">
                            <custom-button
                                label="Chiudi"
                                styleType="secondary-outline"
                                @onClick="emitCloseModal"
                            />
                        </div>

                        <div style="margin-right: 15px;">
                            <custom-button
                                label="Pulisci"
                                styleType="secondary"
                                @onClick="cleanResults"
                            />
                        </div>

                        <custom-button
                            label="Cerca"
                            styleType="primary"
                            @onClick="emitSearch"
                        />
                    </div>
                </div>
            </div>
        </div>
    </Transition>    
</template>

<script lang="ts">
import { defineComponent, Transition, PropType, ref, watch } from "vue";
import CustomModal from "./CustomModal.vue";
import CustomButton from "./CustomButton.vue";
import GenericInput from "./GenericInput.vue";
import CustomSelect from "./CustomSelect.vue";
import { Searchable } from '../../types/Searchable';

import axios from "axios";

export default defineComponent({
    name: 'SearchableModal',
    components: {
        CustomModal,
        CustomButton,
        GenericInput,
        CustomSelect,
        Transition
    },
    props: {
        isOpen: {
            type: Boolean as PropType<boolean>,
            required: false,
            default: false
        },   
        searchables: {
            type: [Object, null] as PropType<Searchable | null>,
            required: true,
        }     
    },
    setup(props, context) {      

        const emitCloseModal = () => {
            context.emit('closeModal');
        }

        const emitSearch = () => {
            context.emit('search')
        }

        const assignInitialValue = (type : string) => {
            let initialValue : string | boolean | number;
            switch (type) {
                case 'text':
                    initialValue = '';
                    break;
                case 'select':
                    initialValue = 0;
                    break;
                case 'checkbox':
                    initialValue = false;
                    break;
                case 'multiselect':
                    initialValue = 0;
                    break;
            }
            return initialValue;               
        }

        const state = ref<{}>({});
        const optionsState = ref<{}>({});
        const loadingState = ref<{}>({});
        const relationState = ref<{}>({});
        const initValues = () => {
            if(props.searchables) {
                props.searchables.columns.forEach((item, index) => {
                    state.value[item.column] = assignInitialValue(item.type);
                    
                    if(item.route) {
                        loadingState.value[item.column] = true;
                        axios.get('https://devapi00.gruppogaspari.net' + item.route)
                            .then((response) => {                                
                                optionsState.value[item.column] = response.data.data.options;

                                // Fare check che se questa è colonna è nell'array relations
                                props.searchables.relations.forEach((rel) => {    
                                    const columns = Object.values(rel.columns); 

                                    if(columns.includes(index)) {  
                                        if(rel.order === null) {
                                            let columns_to_update = columns.filter((col) => {
                                                return col !== index;
                                            })

                                            relationState.value[item.column] = {
                                                'update': columns_to_update,
                                                'index': index,
                                                'route': rel.route
                                            };
                                        }
                                    }
                                })

                                loadingState.value[item.column] = false;
                            })
                            .catch((e) => {
                                console.log(e)
                            })
                    }
                })
            }
        }

        const firstOpened = ref<boolean>(false);
        watch(() => props.isOpen, (actual, previous) => {
            if(actual === true && previous === false && firstOpened.value === false) {
                firstOpened.value = true;

                initValues()
            }
        });
               
        const cleanResults = () => {
            props.searchables.columns.forEach(item => {
                state.value[item.column] = assignInitialValue(item.type);
            })
        }

        const handleChangeRelationsSelect = (column : string, index : number) => {
            if(relationState.value[column]) {
                const optionKeyToUpdate = props.searchables.columns[relationState.value[column].update].column
                const optionKeySource = props.searchables.columns[relationState.value[column].index].column
                
                axios.get('https://devapi00.gruppogaspari.net' + relationState.value[column].route)
                    .then(({data}) => {                        
                        const selectedId = parseInt(state.value[column]);
                        const filtered = data.data.filter(record => {
                            return record.properties[optionKeySource] === selectedId;
                        })

                        console.log(filtered)
                        // optionsState.value[optionKey] = [...optionsState.value[optionKey]].filter((option => {
                        //     return option.value 
                        // }))
                    })
                    .catch(e => {
                        console.log(e)
                    })
            }
        }
    
        return {
            emitCloseModal,
            emitSearch,
            state,
            loadingState,
            optionsState,
            cleanResults,
            handleChangeRelationsSelect
        }
    }
})
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>