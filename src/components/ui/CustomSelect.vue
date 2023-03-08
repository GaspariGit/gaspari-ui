<template>
    <div class="custom-select">
        <label for="exampleFormControlSelect1" v-if="label" class="custom-select__label text-sm">
            {{ label }}
        </label>
        <select class="custom-select__select" :value="selected.value" @change="onSelect($event.target.value)"
            :disabled="disabled">
            <option value="">{{ placeholder }}</option>
            <option v-for="type in options" :value="type.value" :key="type.value">
                {{ type.label }}
            </option>
        </select>
    </div>
</template>

<script>
export default {
    emits: ['select'],
    props: {
        label: {
            type: String,
            required: false,
            default: null
        },
        options: {
            type: Array,
            required: true,
        },
        placeholder: {
            type: String,
            requried: false,
            default: 'Seleziona un opzione'
        },
        selected: {
            type: Object,
            required: true,
        },
        disabled: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    methods: {
        onSelect(value) {
            this.$emit("select", value);
        },
    },
};
</script>

