<template>
	<div class="form_container p-6 bg-white rounded-lg shadow">
		<slot name="content"></slot>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
	name: 'FormContainer',
});
</script>