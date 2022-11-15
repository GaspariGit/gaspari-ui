<template>
    <div class="generic-input">
        <label class="generic-input__label text-sm secondary-color" v-if="label">
            {{ label }}
        </label>

        <!-- INSERIRE PREPEND STILIZZARE -->
        <div class="input-container">
            <slot name="prepend"></slot>
            <input
                type="file"                
                class="generic-input__input-file--hidden"
                ref="inputFileRef"
                @change="handleInputChange"
            >
            <div class="generic-input__input-file">
                <div class="generic-input__input-file__button" @click="handleButtonClick">
                    Sfoglia...
                </div>

                <div class="generic-input__input-file__file">                    
                    <div v-if="!currentFile" class="generic-input__input-file__file__placeholder">
                        {{ placeholder }}
                    </div>
                    
                    <div v-else class="generic-input__input-file__file__file-name">
                        {{ currentFile.name }}

                        <div @click="deleteFile" class="generic-input__input-file__file__file-name__cancel">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="#FFFFFF" class="cancel">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>                        
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue";

export default defineComponent({
    name: 'CustomFileUpload',
    props: {
        label: {
            type: String as PropType<string>,
            required: false
        },
        placeholder: {
            type: String as PropType<string>,
            required: false,
            default: 'Nessun file selezionato'
        },
        file: {
            type: File as PropType<File>,
            required: false
        }      
    },
    setup(props, context) {
        const inputFileRef = ref(null);

        const handleButtonClick = () => {
            inputFileRef.value.click();
        }

        const currentFile = ref<File>(null);
        const handleInputChange = ({ target }) => {
            if(target && target.files.length > 0) {
                currentFile.value = target.files[0];
                context.emit('update:file', target.files[0]);

                // Svuoto la input
                inputFileRef.value.value = '';
            }
        }       
        
        const deleteFile = () => {
            currentFile.value = null;
            context.emit('update:file', null);
        }

        return {
            inputFileRef,
            handleButtonClick,
            handleInputChange,
            currentFile,
            deleteFile
        }
    }
})
</script>