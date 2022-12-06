<template>
   <div class="generic-input">
        <label class="generic-input__label text-sm secondary-color" v-if="label">
            {{ label }}
        </label>

        <!-- INSERIRE PREPEND STILIZZARE -->
        <div class="input-container">
            <slot name="prepend"></slot>
            <input
                v-if="!readOnly"
                v-bind="$attrs" 
                v-model="computedValue"
                :class="'generic-input__input ' + classes"                 
            >
        </div>

        <div v-if="readOnly" class="generic-input__read-only">
            {{ computedValue }}
        </div>
   </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';

export default defineComponent({
    name: 'GenericInput',
    emits: ['update'],
    props: {
        classes: {
            required: false,
            default: "",
            type: String as PropType<string>
        },
        modelValue: {
            type: String as PropType<string>,
            default: '',
        },
        label: {
            type: String as PropType<string>,
            required: false
        },
        readOnly: {
            type: Boolean as PropType<boolean>,
            default: false
        }
    },
    setup(props, { emit }) {        
        const computedValue = computed({
            get() {
                return props.modelValue
            },
            set(value) {
                emit("update", value);
            }
        })

        return { computedValue }
    }
})
</script>