<template>
	<label class="wrapper flex items-center" :class="{ 'disabled': disabled }">
		{{label}}
		<input 
			class="checkbox" 
			type="checkbox" 
			:checked="checked" 
			@change="updateInput"
			:disabled="disabled"
			:name="name"
		/>
		<span class="checkmark"></span>
	</label>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
	name: 'CustomCheckbox',
	props: {
		modelValue: { 
			type: Boolean as PropType<boolean>, 			
		},
		disabled: {
			type: Boolean as PropType<boolean>,
			default: false,
		},
		label: { 
			type: String, 
			required: true,
		},
		name: {
			type: String as PropType<string>,
			default: ''
		},
		checked: {
			type: Boolean as PropType<boolean>
		}
	},
	methods: {
		updateInput(event) : void {					
			this.$emit('update:checked', event.target.checked);			
		}
	}
})
</script>