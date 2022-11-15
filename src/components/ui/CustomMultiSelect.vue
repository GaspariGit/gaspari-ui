<template>
    <div class="custom-multiselect">        
        <label 
            for="exampleFormControlSelect1"
            v-if="label"
            class="custom-multiselect__label text-sm"
        >
            {{ label }}
        </label>

        <vue-multiselect 
            v-model="value" 
            :options="visibleOptions"
            class="custom-multiselect__select"
            :placeholder="placeholder"
            :multiple="true"
            :close-on-select="false"
            selectLabel="Seleziona"
            selectedLabel="Selezionato"
            deselectLabel="Rimuovi"
            track-by="label"
            @search-change="find"
            :internal-search="false"
        >     
            <template v-slot:noResult>
                Nessun risultato.
            </template>   

            <template v-slot:tag="props">                                
                <div class="multiselect__tags-wrap">
                    <span class="multiselect__tag">
                        <span>
                            {{ props.option.label }}
                        </span>
                        <i @click="removeOption(props.option)" tabindex="1" class="multiselect__tag-icon"></i>
                    </span>
                </div>
            </template> 

            <template v-slot:option="props">
                {{ props.option.label }}
            </template>
        </vue-multiselect>        
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import VueMultiselect from 'vue-multiselect';
import SelectOptions from '../../types/SelectOptions';

export default defineComponent({
    name: 'CustomMultiSelect',
    emits: ['update:selectedOptions'],    
    props: {
        label: {
            type: String as PropType<string>
        },
        placeholder: {
            type: String as PropType<string>,
            default: 'Seleziona opzione'
        },
        options: {
            type: Array as PropType<Array<SelectOptions>>,
            required: true            
        },
        selectedOptions: {
            type: Array as PropType<Array<string> | Array<number>>,
            required: true
        },               
    },
    components: {
        VueMultiselect
    },
    data () {
        return {  
            value: [], // Opzioni selezionate
            visibleOptions: [] as Array<SelectOptions> // Opzioni nella select
        }
    },
    methods: {
        removeOption(option : SelectOptions) : void {
            const optionIndex : number = this.value.findIndex((_option : SelectOptions) => {
                return _option.label === option.label && _option.value === option.value; 
            }) 
            const duplicatedOptions = this.value;
            duplicatedOptions.splice(optionIndex, 1);
            this.value = duplicatedOptions;
            this.updateModel();
        },
        find(e : string) : void {
            this.visibleOptions = [...this.options].filter((option) => {
                return option.label.toLowerCase().includes(e.toLowerCase());
            })
        },
        updateModel() {
            const selected = [...this.value].map((value : SelectOptions) => {
                return value.value
            })
            this.$emit('update:selectedOptions', selected);
        },        
    },
    watch: {
        value() {
            // Questo watch tiene in considerazione solo la aggiunta, non la rimozione di elementi,
            // quindi richiamo la funzione updateModel anche in removeOption
            this.updateModel();
        }
    },
    mounted() {
        this.visibleOptions = this.options;

        // Faccio match tra array di valori e array di oggetti option
        let selectedOptions = [];
        [...this.selectedOptions].forEach((selectedOption : string | number) => {
            const val = this.options.find((option : SelectOptions) => {
                return option.value == selectedOption
            });
            if(val) {
                selectedOptions.push(val);
            } else {
                console.log('Option multiselect not found');
            }
        });

        this.value = selectedOptions;
    }
});
</script>

<style src="vue-multiselect/dist/vue-multiselect.css"></style>
