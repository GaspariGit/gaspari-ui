<template>
    <div class="custom-select">
        <label for="exampleFormControlSelect1" v-if="label" class="custom-select__label text-sm">
            {{ label }}
        </label>
        <select class="custom-select__select" :value="selected.value" @change="onSelect($event.target.value)"
            :disabled="disabled">
            <option value="">{{ placeholder }}</option>
            <option v-for="option in options" :value="option.value" :key="option.value">
                {{ option.label }}
            </option>
        </select>
    </div>
</template>

<script lang="ts">
export default {
    emits: ['select'],
    props: {
        label: {
            type: String,
            required: false,
            default: null
        },
        options: {
            type: Object,
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

