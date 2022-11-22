<template>
    <div class="custom-table">

		<h2 v-if="title" class="mb-3 font-semibold text-lg uppercase">
			{{ title }}
		</h2>

		<div class="text-textGrey text-sm font-medium row-pagination flex justify-between items-center">
			<div class="flex">
				<div class="mr-10">{{ perPageData }} risultati di 10.000</div>
				<div class="flex">
					<label for="numberPerPage" class="mr-1">Elementi visualizzati: </label>
					<select @change="changePerPageData" id="numberPerPage" class="bg-white border text-black">
						<option value="25" :selected="perPageData === 25">25</option>
						<option value="50" :selected="perPageData === 50">50</option>
						<option value="100" :selected="perPageData === 100">100</option>
						<option value="250" :selected="perPageData === 250">250</option>
						<option value="500" :selected="perPageData === 500">500</option>
					</select>
				</div>
			</div>			
		</div>
		<div class="custom-pagination">
			<VueTailwindPagination
				:current="currentPage"
				:total="total"
				:per-page="perPageData"
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
</template>

<script lang="ts">
import { defineComponent, onMounted, PropType, ref } from "vue";
import '@ocrv/vue-tailwind-pagination/styles';
import VueTailwindPagination from '@ocrv/vue-tailwind-pagination';

export default defineComponent({
    name: 'CustomTable',
	components: {
		VueTailwindPagination,
	},
    props: {
		title: {
			type: String as PropType<string>,
			required: false
		},
		total: {
			type: Number as PropType<number>
		},		
		currentPage: {
			type: Number as PropType<number>,
			default: 1
		},
		perPage: {
			type: Number as PropType<number>,
			default: 25
		}
    },
    setup(props, context) {		

		const perPageData = ref<number | null>(null);
		const changePerPageData = ({target}) => {
			perPageData.value = parseInt(target.value)
			emitPagination();
		}

		const currentPageData = ref<number | null>(null);
		const changePageData = (e : number) => {			
			currentPageData.value = e;
			emitPagination();
		}
		
		const totalData = ref<number | null>(null);
		
		// O' mount sets the values equals to props! 
		onMounted(() => {
			perPageData.value = props.perPage;
			currentPageData.value = props.currentPage;
			totalData.value = props.total;
		})

		const emitPagination = () => {
			context.emit('changed-pagination', {
				currentPage: currentPageData.value,
				perPage: perPageData.value
			})
		}

        return {
			currentPageData,
			changePageData,
			perPageData,
			changePerPageData
        }
    }
});
</script>