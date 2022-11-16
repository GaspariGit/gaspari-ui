<template>
    <div class="layout">
        <header-navigation 
            :menuStructure="menuStructure"
        />

        <main class="main-content">
            <div class="container mx-auto py-7">
                <slot name="content"></slot>
            </div>
        </main>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import HeaderNavigation from "../components/partials/HeaderNavigation.vue";
import ListItem from '../types/ListItem';

export default defineComponent({
    name: 'LayoutBase',
    components: {
        HeaderNavigation
    },
    props: {
		menuStructure: {
			type: Array as PropType<Array<ListItem>>,
			required: true
		},
	},
});
</script>