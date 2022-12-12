<template>
    <div class="custom-search-input flex items-center cursor-pointer">		
		<div class="search-box shadow">
			<input @keyup.enter="emitSearch" class="search-input text-textGrey font-medium" type="text" v-model="searchQuery" :placeholder="placeholder">
			<div @click="emitSearch" class="search-btn bg-textGrey hover:bg-customBlack transition h-9 w-9 rounded-full flex items-center justify-center">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#FFFFFF" class="w-5 h-5">
					<path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
				</svg>			
			</div>	  
		</div>
	</div>		
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue";
import GenericInput from "./GenericInput.vue";
export default defineComponent({
    name: "CustomSearchInput",
	components: {
		GenericInput
	},
    props: {
		placeholder: {
			type: String as PropType<string>,
			default: 'Cerca...'
		},		
    },
    setup(props, context) {
		const searchQuery = ref<string>('');

		const emitSearch = () => {
			context.emit('onSearch', searchQuery.value)
		}

		return {
			searchQuery,
			emitSearch
		}
    }
})
</script>