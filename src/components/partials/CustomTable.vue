<template>
    <div class="custom-table">				
		<div class="mb-3 flex items-center justify-between" :class="{'flex-row-reverse' : !title}">
			<h2 v-if="title" class="font-semibold text-lg uppercase">
				{{ title }}
			</h2>

			<slot name="filters"></slot>
		</div>

		<div class="relative">
			<div v-if="loading" class="w-full h-full pt-20 absolute top-0 left-0 flex items-start justify-center rounded backdrop-blur-sm transition z-50">
				<custom-loader 
					:loading="loading"
					size="large"
				/>
			</div>

			<div class="text-textGrey text-sm font-medium row-pagination flex justify-between items-center">
				<div class="flex">
					<div class="mr-10">{{ from }} risultati di {{ total }}</div>
					<div class="flex">
						<label for="numberPerPage" class="mr-1">Elementi visualizzati: </label>
						<select @change="changePerPageData" id="numberPerPage" class="bg-white border text-black">
							<option value="25" :selected="perPage === 25">25</option>
							<option value="50" :selected="perPage === 50">50</option>
							<option value="100" :selected="perPage === 100">100</option>
							<option value="250" :selected="perPage === 250">250</option>
							<option value="500" :selected="perPage === 500">500</option>
						</select>
					</div>
				</div>
			</div>
			<div class="custom-pagination">
				<VueTailwindPagination
					:current="currentPage"
					:total="total"
					:per-page="perPage"
					@page-changed="changePageData"
					text-before-input="Vai a pag."
					text-after-input="Vai"
				/>
			</div>
			<table class="w-full">
				<thead>
					<tr class="row-theaders">
						<slot name="t-head"></slot>
					</tr>
				</thead>
				<tbody class="text-textGrey font-medium">
					<slot name="t-body"></slot>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import '@ocrv/vue-tailwind-pagination/styles';
import VueTailwindPagination from '@ocrv/vue-tailwind-pagination';
import CustomLoader from "../ui/CustomLoader.vue";

export default defineComponent({
    name: 'CustomTable',
	components: {
		VueTailwindPagination,
		CustomLoader
	},
    props: {
		title: {
			type: String as PropType<string>,
			required: false
		},
		total: {
			type: Number as PropType<number>,
			required: true
		},		
		currentPage: {
			type: Number as PropType<number>,
			default: 1
		},
		perPage: {
			type: Number as PropType<number>,
			default: 25
		},
		from: {
			type: Number as PropType<number>,
			required: true
		},
		loading: {
			type: Boolean as PropType<boolean>,
			required: true
		}
    },
    setup(props, context) {		

		const changePerPageData = ({target}) => {
			emitPagination(props.currentPage, parseInt(target.value));
		}

		const changePageData = (e : number) => {	
			emitPagination(e, props.perPage);
		}
		
		const emitPagination = (currentPageData : number, perPageData : number) => {
			context.emit('changed-pagination', {
				currentPage: currentPageData,
				perPage: perPageData
			})
		}

        return {
			changePageData,
			changePerPageData
        }
    }
});
</script>