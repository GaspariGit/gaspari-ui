<template>
	<div>
		{{ ciao }}
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";


export default defineComponent({
	name: 'HomeView',
	setup() {
		console.log('HomeView')
		let ciao = 'ciaoooo';
		return {
			ciao
		}
	}
})
</script>