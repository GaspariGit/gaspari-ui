// mouse.js
import axios from 'axios';
import { ref } from 'vue'
interface RequestParams {
	currentPage : number
	perPage : number
}

interface ParamsObj {
	page: number
	per_page: number
	[propName: string]: any
}

// by convention, composable function names start with "use"
export function usePagination() {

	const results = ref<any[]>([]);
	const total = ref<number | null>(0);
	const from = ref<number | null>(0);
	const currentPage = ref<number | null>(0);
	const perPage = ref<number | null>(0);

	const loading = ref<boolean>(false);

	// Ordinamento: i parametri devono essere settati globalmente
	// per mantenerli nelle chiamate successive
	const currentOrderBy = ref<string>('');
	const currentOrderByDirection = ref<string | null>(null);

	const setPaginationOrder = (orderByColumn : string) => {
		if(currentOrderBy.value === '' || currentOrderBy.value !== orderByColumn) {
			currentOrderBy.value = orderByColumn;
			currentOrderByDirection.value = null;
		} else if(currentOrderBy.value === orderByColumn  && currentOrderByDirection.value === null) {
			currentOrderByDirection.value = 'desc';
		} else if(currentOrderBy.value === orderByColumn && currentOrderByDirection.value === 'desc') {
			currentOrderBy.value = '';
			currentOrderByDirection.value = null;
		} 

		setPaginationOrderClasses(orderByColumn)
	}

	const setPaginationOrderClasses = (orderByColumn : string) => {
		return { 
			'ordered_asc' : currentOrderBy.value === orderByColumn && currentOrderByDirection.value === null,
			'ordered_desc' : currentOrderBy.value === orderByColumn && currentOrderByDirection.value === 'desc',
		}
	}
	
	const updatePagination = async (routeApi : string, params : RequestParams) => {
		loading.value = true;

		let paramsObj = {
			page: params.currentPage,
			per_page: params.perPage,
		} as ParamsObj;

		// Set dei parametri per ordinamento colonna
		if(currentOrderBy.value) {
			paramsObj.order_by = currentOrderBy.value;			
			
			if(currentOrderByDirection.value === 'desc') {
				paramsObj.order_desc = 1
			}
		}
		
		await axios.get(routeApi, {
			params: paramsObj
		})
		.then((res) => {			
			if(res.status === 200) {
				currentPage.value = params.currentPage;
				perPage.value = params.perPage;
				results.value = res.data.data;				
				total.value = res.data.meta.total;
				from.value = res.data.meta.from;				
			}
		})
		.catch((error) => {
			return error;
		})
		
		loading.value = false;
	}

	return {
		results,
		currentPage,
		perPage,
		total,
		from,
		updatePagination,	
		loading,
		setPaginationOrder,
		currentOrderBy,
		currentOrderByDirection,
		setPaginationOrderClasses
	}
}