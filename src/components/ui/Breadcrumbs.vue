<template>
	<div class="text-secondary text-xl" v-html="breadcrumbTemplate">
	</div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue";
import BreadcrumbInterface from "../../types/BreadCrumbInterface";

export default defineComponent({
	name: 'Breadcrumbs',
	props: {
		path_breadcrumbs: {
			type: Array as PropType<Array<BreadcrumbInterface>>,
			required: true,
			default: []
		}
	},
	setup(props) {		
		const breadcrumbString = ref<string>('');
		props.path_breadcrumbs.forEach((item, index) => {			
			if(index === props.path_breadcrumbs.length - 1) {
				breadcrumbString.value += `<span class="font-bold">${item.label}</span>`;
			} else {
				if(item.path) {
					breadcrumbString.value += `<router-link to="${item.path}" class="cursor-pointer hover:underline">${item.label}</router-link>`;
				} else {
					breadcrumbString.value += `<span>${item.label}</span>`
				}

				breadcrumbString.value += ' / '
			}			
		})

		const breadcrumbTemplate = {
			template: `
				${breadcrumbString}
			`
		}

		return {
			breadcrumbTemplate
		}
	}
})
</script>