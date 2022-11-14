<template>
    <main>      
        <HelloWorld />
    </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from './HelloWorld.vue';

export default defineComponent({
  	name: 'App',
    components: {
      HelloWorld
    },
})
</script>

<style lang="scss" scoped></style>