<template>
    <div class="custom-multiselect">        
        <label 
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
            :internal-search="false"
            @search-change="debouncedSearch"
            :loading="loading"
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
import axios from "axios";
import debounce from "lodash.debounce";

export default defineComponent({
    name: 'CustomMultiSelectAsync',
    emits: ['update:selectedOptions'],    
    props: {
        label: {
            type: String as PropType<string>
        },
        placeholder: {
            type: String as PropType<string>,
            default: 'Seleziona opzione'
        },
        optionsSearchRoute: {
            type: String as PropType<string>,
            required: true            
        },
        selectedOptions: {
            type: Array as PropType<Array<SelectOptions>>,
            required: true
        },
    },
    components: {
        VueMultiselect
    },
    data () {
        return {  
            value: [],          
            visibleOptions: [] as Array<SelectOptions>,
            loading: false
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
        updateModel() {            
            this.$emit('update:selectedOptions', this.value);
        },
        find(e : string) {            
            if(e) {
                this.loading = true;
                axios.get(this.optionsSearchRoute, {
                    params: {
                        q: e
                    }
                })
                .then((res) => {
                    if(res.status === 200) {                        
                        this.loading = false;

                        // Aggiorno visibleOptions
                        let visibleOptions = [...this.value];                        
                        this.visibleOptions = visibleOptions.concat(res.data);
                    }
                })
                .catch((e) => {
                    console.log(e)
                    this.loading = false;
                })                
            }
        },
        debouncedSearch: debounce(function (e : string) {
            this.find(e)
        }, 500)
    },
    watch: {
        value() {
            // Questo watch tiene in considerazione solo la aggiunta, non la rimozione di elementi,
            // quindi richiamo la funzione updateModel anche in removeOption
            this.updateModel();
        }
    },
    mounted() {
        this.visibleOptions = [...this.selectedOptions];
        this.value = this.selectedOptions;
    }
});
</script>

<style src="vue-multiselect/dist/vue-multiselect.css"></style>
