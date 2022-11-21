<template>	
	<template v-if="path_breadcrumbs.length > 0">
		<div class="mb-6 ml-1 ">
			<breadcrumbs :path_breadcrumbs="path_breadcrumbs" />			
		</div>
	</template>

	<!-- Top -->
	<slot name="form-buttons-top"></slot>

	<h3 v-if="title" class="mb-3 ml-1 font-semibold text-lg uppercase">{{ title }}</h3>	

	<!-- Content -->
	<div class="form_container p-6 bg-white rounded-lg shadow overflow-x-hidden">
		<slot name="form-content"></slot>
	</div>

	<!-- Bottom -->
	<slot name="form-buttons-bottom"></slot>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import Breadcrumbs from "../ui/Breadcrumbs.vue";
import BreadCrumbInterface from '../../types/BreadCrumbInterface';

export default defineComponent({
	name: 'FormContainer',
	components: {
		Breadcrumbs
	},
	props: {
		path_breadcrumbs: {
			type: Array as PropType<Array<BreadCrumbInterface>>,
			required: false,
			default: []
		},
		title: {
			type: String as PropType<string>,
			required: false
		}
	}
});
</script>