<template>
    <div class="custom-select">
        <label 
            for="exampleFormControlSelect1"
            v-if="label"
            class="custom-select__label text-sm"
        >
            {{ label }}
        </label>
        <select 
            :name="name" 
            class="custom-select__select" 
            :id="'select_' + name"
            @change="handleSelectChange"
            :disabled="disabled"
        >
            <option selected value="0">{{ placeholder }}</option>
            <option 
                v-for="(option, index) in options"
                :key="index"
                :value="option.value"
                :selected="option.value == value"
            >
                {{ option.label }}
            </option>
        </select>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import SelectOptions from "../../types/SelectOptions";

export default defineComponent({
    name: 'CustomSelect',
    props: {
        options: {
            type: Array as PropType<Array<SelectOptions>>,
            required: true
        },
        label: {
            type: String as PropType<string>,
            required: false
        },
        name: {
            type: String as PropType<string>,
            required: true
        },
        value: {
            type: [String, Number] as PropType<string | number>,
        },
        placeholder: {
            type: String as PropType<string>,
            default: 'Seleziona opzione',
            required: false
        },
        disabled: {
            type: Boolean as PropType<boolean>,
			default: false,
        }
    },
    setup(props, context) {
        const handleSelectChange = ({ target }) => {
            context.emit('update:value', target.value)
        }

        return { handleSelectChange }
    }
});
</script>