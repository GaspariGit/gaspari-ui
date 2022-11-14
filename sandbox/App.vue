<template>
    <main>
        <h1>Welcome to your your sandbox environment</h1>

        <generic-input 
			label="Test"
			type="text"
			placeholder="Inserisci"
			v-model="value"
		/>

		{{ value }}
        
    </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import GenericInput from '../src/ui/GenericInput.vue';

export default defineComponent({
  	name: 'App',
    components: {
      GenericInput
    },
	data() {
		return {
			value: ''
		}
	}
})
</script>

<style lang="scss" scoped></style>