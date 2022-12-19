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
                        <template v-if="filterables">
                            <div class="grid grid-cols-12 gap-6">
                                <div class="col-span-6" v-for="(item, index) in filterables.columns" :key="index">
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
                                            @change="(e) => handleChangeRelationsSelect(e, item.column, index)"                                           
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
                            @onClick="emitFilter"
                        />
                    </div>
                </div>
            </div>
        </div>
    </Transition>    
</template>

<script lang="ts">
import { defineComponent, Transition, PropType, ref, watch } from "vue";
import CustomButton from "./CustomButton.vue";
import GenericInput from "./GenericInput.vue";
import CustomSelect from "./CustomSelect.vue";
import { Filterable, FilterableColumn } from '../../types/Filterable';
import axios from "axios";
const NAME_KEY = '_name';

export default defineComponent({
    name: 'FilterbleModal',
    components: {
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
        filterables: {
            type: [Object, null] as PropType<Filterable | null>,
            required: true,
        },
        baseApiPath: {
            type: String as PropType<string | undefined>,
            required: true,
            default: ''
        }  
    },
    setup(props, context) {      

        const emitCloseModal = () => {
            context.emit('closeModal');
        }

        const emitFilter = () => {
            const objFilter = {
                filter: {}                
            };
            for(let property in state.value) {
                const indexOfProperty = props.filterables.columns.findIndex(column => column.column === property);
                if(state.value[property]) {
                    objFilter.filter[indexOfProperty] = state.value[property];
                }
            }

            emitCloseModal();
            context.emit('filter', objFilter)
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
        const initFilter = () => {
            if(props.filterables) {
                props.filterables.columns.forEach((item, index) => {
                    initValues(item);                    
                    initOptions(item, index);
                })
            }
        }
        
        const initValues = (item : FilterableColumn) => {
            state.value[item.column] = assignInitialValue(item.type);
        }

        const initOptions = (item : FilterableColumn, index : number) => {
            if(item.route) {
                loadingState.value[item.column] = true;
                axios.get(props.baseApiPath + item.route)
                    .then((response) => {                                
                        optionsState.value[item.column] = response.data.data.options;

                        // Fare check se questa colonna è nell'array relations
                        props.filterables.relations.forEach((rel) => {    
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
        }

        const firstOpened = ref<boolean>(false);
        watch(() => props.isOpen, (actual, previous) => {
            if(actual === true && previous === false && firstOpened.value === false) {
                firstOpened.value = true;
                initFilter();
            }
        });
               
        const cleanResults = () => {
            props.filterables.columns.forEach((item, index) => {
                state.value[item.column] = assignInitialValue(item.type);

				if(item.route) {
					initOptions(item, index);
				}
            })
        }

        const handleChangeRelationsSelect = (e, column : string, index : number) => {
            if(relationState.value[column]) {
                const optionKeysToUpdate = [];
				const optionsIndexesToUpdate = []
				relationState.value[column].update.forEach((id) => {
					optionKeysToUpdate.push(props.filterables.columns[id].column)
					optionsIndexesToUpdate.push(id)
				})

				// Reset dei campi con relazioni
				if(parseInt(e.target.value) === 0) {
					initOptions(props.filterables.columns[index], index);
					// Questo per resettare tutte le input a cui è legata
					optionKeysToUpdate.forEach((o, i) => {						
						initValues(props.filterables.columns[optionsIndexesToUpdate[i]]);
						initOptions(props.filterables.columns[optionsIndexesToUpdate[i]], optionsIndexesToUpdate[i]);
					});
					
					return;
				}
				
                const optionKeySource = props.filterables.columns[relationState.value[column].index].column
                
                axios.get(props.baseApiPath + relationState.value[column].route)
                    .then(({data}) => {                        
                        const selectedId = parseInt(state.value[column]);
                        const filtered = data.data.filter(record => {
                            return record.properties[optionKeySource] === selectedId;
                        })

                        optionKeysToUpdate.forEach(optionKeyToUpdate => {
							if(filtered.length === 1) {
								state.value[optionKeyToUpdate] = filtered[0].properties[optionKeyToUpdate];
							}

							const nameKey = optionKeyToUpdate.split('_')[0] + NAME_KEY;
							optionsState.value[optionKeyToUpdate] = filtered.map((option) => {
								return {
									value: option.properties[optionKeyToUpdate],
									label: option.properties[nameKey]
								}
							})   
						})                     
                    })
                    .catch(e => {
                        console.log(e)
                    })
            }
        }
    
        return {
            emitCloseModal,
            emitFilter,
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