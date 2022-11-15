<template>
    <div>
        <custom-checkbox
            v-for="(option, index) in options"
            :key="index"
            :label="option.label"
            :checked="value.includes(option.id)"
            @update:checked="check(option.id, $event)"
        />
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import CustomCheckbox from './CustomCheckbox.vue';
import MultiCheckboxOptions from '../../types/MultiCheckboxOptions';

export default defineComponent({
    name: 'CustomMultiCheckbox',
    components: {
        CustomCheckbox
    },
    props: {
        value: {
            type: Array as PropType<Array<string | number>>,
            default: []            
        },
        options: {
            type: Array as PropType<MultiCheckboxOptions[]>,
            required: true            
        }
    },
    setup(props, context) {
        const check = (optionId : string | number, checked : boolean) => {
            // copy the value Array to avoid mutating props
            let updatedValue = [...props.value];
            // remove name if checked, else add name
            if (checked) {
                updatedValue.push(optionId);
            } else {
                updatedValue.splice(updatedValue.indexOf(optionId), 1);
            }

            // emit the updated value
            context.emit("update:value", updatedValue);
        };
        
        return { check };
    },
});
</script>