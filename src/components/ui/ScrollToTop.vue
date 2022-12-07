<template>
	<Transition>
		<div v-show="buttonVisible" @click="trigger" ref="scrollToTop" class="fixed z-50 bottom-10 right-5 w-12 h-12 bg-secondary hover:bg-secondaryHover transition rounded-full flex items-center justify-center cursor-pointer shadow">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#FFFFFF" class="w-6 h-6">
				<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
			</svg>
		</div>
	</Transition>
</template>

<script lang="ts">
import { defineComponent, Transition, ref, onMounted } from "vue";
export default defineComponent({
	name: 'ScrollToTop',
	components: {
		Transition
	},
	setup() {
		const trigger = () => {
			window.scrollTo({
				top: 0,
				behavior: 'smooth'
			})
		}	
		
		const buttonVisible = ref<boolean>(false);
		const detectScroll = () => {			
			if(window.scrollY >= 500) {
				buttonVisible.value = true;
			} else {
				buttonVisible.value = false;
			}			
		}

		onMounted(() => {	
			document.addEventListener("scroll", detectScroll)
		});

		return {
			trigger,
			buttonVisible
		}
	}
});
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>