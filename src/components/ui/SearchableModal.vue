<template>
    <div class="custom-modal" v-if="isOpen">
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
                    <div class="grid grid-cols-12 gap-6">
                        <div class="col-span-6" v-for="(item, index) in searchables" :key="index">
                            <!-- Input Text -->
                            <template v-if="item.type === 'text'">
                                <generic-input
                                    type="text"
                                    :placeholder="item.label"
                                    :label="item.label"
                                    v-model="state[item.column]"
                                    :disabled="loadingState[item.column]"
                                />
                            </template>

                            <!-- Select -->
                            <template v-if="item.type === 'select'">
                                <custom-select
                                    :options="[
                                        {
                                            value: 1,
                                            label: 'Giovanni'
                                        },
                                        {
                                            value: 2,
                                            label: 'Mario'
                                        },
                                        {
                                            value: 3,
                                            label: 'Andrea'
                                        },
                                    ]"
                                    :label="item.label"
                                    :name="item.column"
                                    :placeholder="item.label"
                                    :disabled="loadingState[item.column]"
                                />
                            </template>
                        </div>
                    </div>
                </div>

                <div class="modal-footer">
                    <div style="margin-right: 15px;">
                        <custom-button
                            label="Chiudi"
                            styleType="secondary-outline"
                            @onClick="emitCloseModal"
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
</template>

<script lang="ts">
import { defineComponent, onMounted, PropType, ref } from "vue";
import CustomModal from "./CustomModal.vue";
import CustomButton from "./CustomButton.vue";
import GenericInput from "./GenericInput.vue";
import CustomSelect from "./CustomSelect.vue";
import Searchable from '../../types/Searchable';
import axios from "axios";

export default defineComponent({
    name: 'SearchableModal',
    components: {
        CustomModal,
        CustomButton,
        GenericInput,
        CustomSelect
    },
    props: {
        isOpen: {
            type: Boolean as PropType<boolean>,
            required: false,
            default: false
        },   
        searchables: {
            type: Array as PropType<Searchable>,
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

        const state = ref<{}>({});
        const optionsState = ref<{}>({});
        const loadingState = ref<{}>({});
        onMounted(() => {
            console.log(props.searchables)  

            props.searchables.columns.forEach((item) => {
                state.value[item.column] = '';
                if(item.route) {
                    loadingState.value[item.column] = true;
                    // let options = [];
                    // axios.get(item.route)
                    //     .then(({data}) => {
                    //         console.log(data)
                    //     })
                    //     .catch((e) => {
                    //         console.log(e)
                    //     })
                }
            })
        })

        return {
            emitCloseModal,
            emitSearch,
            state,
            loadingState
        }
    }
})
</script>

<style>

</style>