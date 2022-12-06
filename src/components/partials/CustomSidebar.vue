<template>
<Transition>
	<div v-if="isOpen" id="custom-sidebar" class="custom-sidebar shadow-2xl">
		<div class="sidebar-content">

			<div class="sidebar-header mb-6 flex justify-between items-center">
				<h4 class="text-2xl font-bold">{{ title }}</h4>
				<div class="sidebar-close" @click="emitCloseSidebar">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" width="24px" height="24px">
						<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</div>
			</div>

			<div class="sidebar-body">
				<slot name="sidebar-content"></slot>
			</div>
		</div>
		<div class="sidebar-bg" @click="emitCloseSidebar"></div>
		<div v-if="loading" class="w-full h-full absolute top-0 left-0 flex items-center justify-center rounded backdrop-blur-sm transition z-50">
			<custom-loader 
				:loading="loading"
				size="large"
			/>
		</div>
	</div>
</Transition>
</template>

<script lang="ts">
import { defineComponent, PropType, Transition } from "vue";
import CustomLoader from "../ui/CustomLoader.vue";

export default defineComponent({
	name: 'CustomSidebar',
	components: {
		Transition,
		CustomLoader
	},
	props: {
		isOpen: {
			type: Boolean as PropType<boolean>,
			default: false
		},
		title: {
			type: String as PropType<string>,
			required: false,
			default: 'Oops'
		},
		loading: {
			type: Boolean as PropType<boolean>,
			default: false
		}
	},
	setup(props, context) {

		const emitCloseSidebar = () => {
			context.emit('close-sidebar');
		}	

		return {
			emitCloseSidebar
		}
	}
});
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: all 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  transform: translateX(100%);
}
</style>