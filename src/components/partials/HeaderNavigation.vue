<template>
	<header class="header-navigation my-5 container mx-auto">
		<div class="flex items-center justify-between mb-5">
			<div>
				<img :src="siteLogoImage" alt="gaspari-logo" >
			</div>
			<div class="flex items-center">
				<div class="cursor-pointer">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
						<path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
					</svg>
				</div>

				<div class="ml-7 cursor-pointer">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
						<path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
					</svg>
				</div>

				<div class="cursor-pointer ml-7  flex items-center">
					<div class="h-12 w-12 rounded-full bg-gray flex items-center justify-center">
						<div class="font-regular text-xl">EP</div>
					</div>

					<div class="ml-1">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3">
							<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
						</svg>
					</div>
				</div>
			</div>
		</div>

		<nav class="text-secondary text-sm font-medium">
			<ul class="flex">
				<li 
					v-for="(item, index) in menuStructure" 
					:key="index"
					class="mr-6 flex items-center cursor-pointer hover:text-secondaryHover transition"					
					@click="showSubMenu(index)"
				>
					<span>{{ item.label }}</span>
					<div 
						class="ml-1"
						v-if="item.children.length > 0"
					>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3">
							<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
						</svg>
					</div>
				</li>								
			</ul>
		</nav>
	</header>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import siteLogo  from '../../assets/images/logo.png';
import ListItem from '../../types/ListItem';

export default defineComponent({
    name: 'HeaderNavigation',
	props: {
		menuStructure: {
			type: Array as PropType<Array<ListItem>>,
			required: true
		},
	},
	setup(props) {
		const siteLogoImage = siteLogo;

		const showSubMenu = (index : number) => {
			alert(props.menuStructure[index].label)
		}

		return {
			siteLogoImage,
			showSubMenu
		}
	}
})
</script>