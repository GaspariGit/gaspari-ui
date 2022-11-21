<template>
	<div class="text-secondary text-xl">
		<template v-for="(item, index) in path_breadcrumbs" :key="index">
			<template v-if="index === path_breadcrumbs.length - 1">
				<span class="font-bold">{{  item.label}}</span>
			</template>
			<template v-else>
				<template v-if="item.path">
					<router-link :to="item.path" class="cursor-pointer hover:underline">{{ item.label }}</router-link>
				</template>
				<template v-else>
					<span>{{ item.label }}</span>
				</template> / 
			</template>
		</template>
	</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import BreadcrumbInterface from "../../types/BreadCrumbInterface";

export default defineComponent({
	name: 'Breadcrumbs',
	
	props: {
		path_breadcrumbs: {
			type: Array as PropType<Array<BreadcrumbInterface>>,
			required: true,
			default: []
		}
	}
})
</script>