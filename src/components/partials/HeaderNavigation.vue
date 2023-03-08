<template>
	<header class="header-navigation py-5 container mx-auto">
		<div class="flex items-center justify-between mb-5">
			<router-link :to="{ name: 'home' }">
				<div>
					<img :src="siteLogoImage" alt="gaspari-logo">
				</div>
			</router-link>
			<div class="flex items-center">
				<div class="cursor-pointer">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
						stroke="currentColor" class="w-6 h-6">
						<path stroke-linecap="round" stroke-linejoin="round"
							d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
					</svg>
				</div>

				<div class="ml-7 cursor-pointer">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
						stroke="currentColor" class="w-6 h-6">
						<path stroke-linecap="round" stroke-linejoin="round"
							d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
					</svg>
				</div>

				<div class="cursor-pointer ml-7  flex items-center">
					<div class="h-12 w-12 rounded-full bg-gray flex items-center justify-center">
						<div class="font-regular text-xl">EP</div>
					</div>

					<div class="ml-1">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
							stroke="currentColor" class="w-3 h-3">
							<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
						</svg>
					</div>
				</div>
			</div>
		</div>

		<nav ref="navigationRef" class="text-secondary text-base font-medium relative">
			<ul class="flex">
				<li v-for="(item, index) in menuStructure" :key="index"
					class="mr-6 flex items-center cursor-pointer hover:text-secondaryHover transition select-none"
					@click="(e) => showSubMenu(index, e)">
					<template v-if="item.href && item.children.length === 0">
						<router-link :to="item.href" @click="forceClose">
							<span :class="{ 'text-secondaryHover': currentMenu && currentMenu.id === item.id }">{{
								item.label }}</span>
						</router-link>
					</template>

					<template v-else>
						<span :class="{ 'text-secondaryHover': currentMenu && currentMenu.id === item.id }">{{ item.label
						}}</span>
					</template>

					<div class="ml-1 text-secondary" v-if="item.children.length > 0">
						<template v-if="currentMenu">
							<svg v-if="currentMenu.id === item.id" xmlns="http://www.w3.org/2000/svg" fill="none"
								viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3">
								<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
							</svg>

							<svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
								stroke-width="1.5" stroke="currentColor" class="w-3 h-3">
								<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
							</svg>
						</template>

						<svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
							stroke="currentColor" class="w-3 h-3">
							<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
						</svg>
					</div>
				</li>
			</ul>

			<!-- SubMenu -->
			<Transition>
				<div ref="menuElementRef" v-if="isVisibleSubMenu && currentMenu"
					class="text-black absolute w-full shadow-md p-6 bg-white top-7 left-0 z-50">
					<div class="font-bold mb-4">{{ currentMenu.label }}</div>
					<ul class="flex flex-wrap">
						<li v-for="(el, index) in currentMenu.children" :key="index"
							class="w-1/4 mb-3 cursor-pointer transition hover:underline">
							<template v-if="el.href && el.children.length === 0">
								<router-link @click="forceClose" :to="el.href">{{ el.label }}</router-link>
							</template>

							<div v-else>{{ el.label }}</div>
						</li>
					</ul>
				</div>
			</Transition>
		</nav>
	</header>
</template>

<script lang="ts">
import { defineComponent, onBeforeUnmount, onMounted, PropType, ref, Transition } from 'vue';
import siteLogo from '../../assets/images/logo.png';
import ListItem from '../../types/ListItem';

export default defineComponent({
	name: 'HeaderNavigation',
	components: {
		Transition
	},
	props: {
		menuStructure: {
			type: Array as PropType<Array<ListItem>>,
			required: true
		},
	},
	setup(props) {
		const siteLogoImage = siteLogo;

		const isVisibleSubMenu = ref<boolean>(false);
		const currentMenu = ref<ListItem>(null);
		const showSubMenu = (index: number, e: Event) => {
			if (props.menuStructure[index].children.length > 0) {

				if (currentMenu.value && currentMenu.value.id === props.menuStructure[index].id) {
					currentMenu.value = null;
					isVisibleSubMenu.value = false;
				} else {
					currentMenu.value = props.menuStructure[index];
					isVisibleSubMenu.value = true;
				}

			}
		}

		const navigationRef = ref(null);
		const menuElementRef = ref(null);
		const close = (e: Event) => {
			if (menuElementRef.value) {
				if (!menuElementRef.value.contains(e.target) && !navigationRef.value.contains(e.target)) {
					currentMenu.value = null;
					isVisibleSubMenu.value = false;
				}
			}
		}

		const forceClose = () => {
			isVisibleSubMenu.value = false;
			currentMenu.value = null;
		}

		onMounted(() => {
			document.addEventListener('click', close)
		})

		onBeforeUnmount(() => {
			document.removeEventListener('click', close)
		})

		return {
			siteLogoImage,
			showSubMenu,
			currentMenu,
			isVisibleSubMenu,
			menuElementRef,
			navigationRef,
			forceClose
		}
	}
})
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
	transition: all 0.12s ease-out;
}

.v-enter-from,
.v-leave-to {
	opacity: 0;
	transform: translateY(10px);
}
</style>