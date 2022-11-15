<template>
    <div 
        class="spinner-border" 
        :class="size" 
        role="status"
        v-if="loading"
    >
        <span class="sr-only">Loading...</span>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
export default defineComponent({
    name: 'CustomLoader',
    props: {
        loading: {
            type: Boolean as PropType<boolean>,
            default: false
        },
        size: {
            type: String as PropType<string>,
            default: 'default'
        }
    },   
})
</script>