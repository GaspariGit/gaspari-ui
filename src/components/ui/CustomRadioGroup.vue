<template>

    <div class="custom-radio-group">
        <div
            v-for="option in options"
            :key="option.id"
            :class="{ 'disabled' : option.disabled, 'checked' : option.value == value }"
            class="custom-radio-group__single-radio"
        >            
            <input              
                type="radio" 
                :name="option.name" 
                :id="option.id" 
                :value="option.value"
                :disabled="option.disabled"
                class="custom-radio-group__single-radio__radio-hidden"  
                :checked="option.value == value"   
                @change="checkRadio"
            >
            <span 
                class="custom-radio-group__single-radio__radio" 
                @click="checkRadio({
                    target: {
                        value: option.value
                    }
                })"
            ></span>
            <label 
                class="custom-radio-group__single-radio__radio-label" 
                :for="option.id"
            >
                {{ option.label }}
            </label>
        </div>
    </div>
  
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import RadioGroupOptions from '../../types/RadioGroupOptions';

export default defineComponent({
    name: 'CustomRadioGroup',
    props: {
        options: {
            type: Array as PropType<Array<RadioGroupOptions>>,
            required: true
        },
        value: {
            type: [Number, String] as PropType<number | string>,
            default: ''
        },        
    },
    setup(props, context) {                           
        const checkRadio = ({ target }) => {
            context.emit('update:value', target.value)
        }  

        return { checkRadio }
    }
});
</script>