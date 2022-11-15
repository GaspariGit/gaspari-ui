<template>
    <div class="generic-input">
        <label class="generic-input__label text-sm secondary-color" v-if="label">
            {{ label }}
        </label>
        
        <ul class="file-list">
            <li 
                class="file-list-item"
                v-for="(file, index) in fileList"
                :key="index"
            >
                {{ file.original_name + '.' + file.extension }}

                <div @click="deleteFile(index)" class="item-cancel">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="#FFFFFF" class="cancel">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>    
            </li>
        </ul>

        <input
            type="file"
            class="generic-input__input-file--hidden"
            ref="inputFileRef"
            @change="handleInputChange"
            multiple
        >

        <div class="flexAligned">
            <div style="margin-right: 10px;">
                <custom-button
                    label="Carica"
                    styleType="primary"
                    :disabled="false"
                    @onClick="handleClick"
                >
                    <template v-slot:slot-left>
                        <svg style="margin-right: 8px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFFFFF" width="16px" height="16px">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                        </svg>
                    </template>            
                </custom-button>
            </div>
            
            <custom-loader
                :loading="loading"
                size="small"
            />
        </div>

    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, PropType, ref } from "vue";
import CustomButton from "./CustomButton.vue";
import axios from "axios";
import FileInterface from "../../types/FileInterface";
import CustomLoader from "./CustomLoader.vue";

export default defineComponent({
    name: 'CustomMultipleFileUpload',
    components: {
        CustomButton,
        CustomLoader
    },
    props: {
        label: {
            type: String as PropType<string>,
            required: false
        },
        routeGetFiles: {
            type: String as PropType<string>,
            required: true
        },
        routePostFiles: {
            type: String as PropType<string>,
            required: true
        },
        routeDeleteFile: {
            type: String as PropType<string>,
            required: true
        },
    },
    setup(props) {
        const inputFileRef = ref(null);

        const handleClick = () => {
            inputFileRef.value.click();          
        }
        
        const handleInputChange = ({ target }) => {            
            if(target && target.files.length > 0) {
                let formData = new FormData();                  
                for(let i = 0; i < target.files.length; i++) {
                    const file : File = target.files[i];
                    formData.append('files', file);                     
                }
                postFiles(formData);                                          
                // Svuoto la input
                inputFileRef.value.value = '';
            }
        }

        const fileList = ref<Array<FileInterface>>([]);
        const loading = ref<boolean>(false);
        const postFiles = (formData : FormData) => {
            console.log(formData);
            loading.value = true;

            axios.post(props.routePostFiles, formData)
                .then(res => {
                    if(res.data.success) {
                        alert('success');                        
                    } else {
                        alert('error')
                    }
                    loading.value = false;
                })
                .catch(error => {
                    console.log(error);
                    loading.value = false;
                })
        }

        const deleteFile = (index : number) => {
            if(fileList.value.length > 0) {
                fileList.value.splice(index, 1);
            }
        }

        const getFiles = () => {
            axios.get(props.routeGetFiles) 
                .then((res) => {
                    console.log('okk', res)
                })
                .catch((error) => {
                    console.log(error);
                })
        }

        // const splitFileName = (file : File) => {
        //     const splitted = file.name.split('.');
        //     return {
        //         original_name: splitted[0],
        //         extension: splitted[1]
        //     }        
        // }

        onMounted(() => {
            getFiles()
        })
        
        return {
            handleClick,
            handleInputChange,
            inputFileRef,
            fileList,
            deleteFile,
            getFiles,
            loading
        }
    }
});
</script>