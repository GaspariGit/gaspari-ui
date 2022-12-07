// mouse.js
import axios from 'axios';
import type { Filterable } from 'src/types/Filterable';
import { ref } from 'vue'
interface RequestParams {
	currentPage : number
	perPage : number,
	search? : {}
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
	const filterables = ref<Filterable | null>(null);

	const loadingPagination = ref<boolean>(false);

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
	}

	const setPaginationOrderClasses = (orderByColumn : string) => {
		return { 
			'ordered_asc' : currentOrderBy.value === orderByColumn && currentOrderByDirection.value === null,
			'ordered_desc' : currentOrderBy.value === orderByColumn && currentOrderByDirection.value === 'desc',
		}
	}

	const filterParams = ref<{filter: {}}>({filter: {}})
	const setFilterParams = (filter : any) => {
		filterParams.value.filter = filter.filter
	}
	
	const updatePagination = async (routeApi : string, params : RequestParams) => {
		loadingPagination.value = true;

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

		// Set dei parametri della ricerca
		if(filterParams.value.filter) {
			paramsObj.filter = filterParams.value.filter;
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
				filterables.value = res.data.filterables;				
			}
		})
		.catch((error) => {
			return error;
		})
		
		loadingPagination.value = false;
	}

	return {
		results,
		currentPage,
		perPage,
		total,
		from,
		filterables,
		setFilterParams,
		updatePagination,	
		loadingPagination,
		setPaginationOrder,
		setPaginationOrderClasses
	}
}