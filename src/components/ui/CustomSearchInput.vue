<template>
    <div class="custom-search-input flex items-center cursor-pointer">
		<div class="mr-2 bg-textGrey h-8 w-8 rounded-full flex items-center justify-center">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#FFFFFF" class="w-5 h-5">
				<path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
			</svg>			
		</div>
		<!-- <div class="font-medium text-customBlack">
			Cerca
		</div> -->
	</div>	
</template>

<script lang="ts">
import { defineComponent } from "vue";
import GenericInput from "./GenericInput.vue";
export default defineComponent({
    name: "CustomSearchInput",
	components: {
		GenericInput
	},
    props: {

    },
    setup() {
        console.log('kaak')
    }
})
</script>