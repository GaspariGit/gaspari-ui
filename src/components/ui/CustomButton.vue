<template>
    <button 
        class="custom-button" 
        :class="assignStyle()"
        :disabled="disabled"
        @click="handleClick"
    >            
        <slot name="slot-left"></slot>
        <span>{{ label }}</span>
        <slot name="slot-right"></slot>
    </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
    name: 'CustomButton',
    props: {  
        label: {
            type: String as PropType<string>,
            required: false
        },      
        styleType: {
            type: String as PropType<string>,
            required: false,
            default: 'primary'
        },
        size: {
            type: String as PropType<string>,
            required: false,
            default: 'default'
        },
        disabled: {
            type: Boolean as PropType<boolean>,
            required: false,
            default: false
        }        
    },
    setup(props, context) {

        const assignStyle = () : string => {
            let className = 'btn ';

            let styleType = '';
            switch (props.styleType) {
                case 'primary':
                    styleType = 'btn-primary';
                    break;
                case 'primary-outline':
                    styleType = 'btn-primary-outline';
                    break;
                case 'secondary':
                    styleType = 'btn-secondary';
                    break;
                case 'secondary-outline':
                    styleType = 'btn-secondary-outline';
                    break;
                default:
                    break;
            }

            let size = '';
            switch (props.size) {
                case 'default':
                    size = '';
                    break;
                case 'small':
                    size = 'btn--small';
                    break;     
                case 'large':
                    size = 'btn--large';
                    break;
            }

            let disabled = '';
            if(props.disabled) {
                disabled = ' btn--disabled';
            }
            
            return className + ' ' + styleType + ' ' + size + ' ' + disabled;
        }  
        
        const handleClick = (e) => {
            if(props.disabled) {
                return e.preventDefault();
            } 

            context.emit('onClick');
        }

        return { 
            assignStyle,
            handleClick
        };
    }
});
</script>
