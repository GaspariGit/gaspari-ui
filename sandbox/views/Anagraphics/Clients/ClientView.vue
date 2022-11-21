<template>
	<div>{{ ok }}</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: 'ClientView',
    props: {},
    setup(props) {
        let ok = 'ok';

        return {
            ok
        }
    }
})
</script>