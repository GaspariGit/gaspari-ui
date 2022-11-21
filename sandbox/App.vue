<template>  
	<layout-base 
		:menuStructure="menuStructureMenu"
	>  
		<template v-slot:layout-content>
			<router-view />
		</template>
	</layout-base>
</template>

<script lang="ts">
import menuStructure from './menuStructure';

import { defineComponent } from "vue";
import LayoutBase from "../src/layouts/LayoutBase.vue";

export default defineComponent({
	name: 'App',
	components: {
		LayoutBase
	},
	setup() {
		const menuStructureMenu = menuStructure;

		return {
			menuStructureMenu
		}
	}
})
</script>
