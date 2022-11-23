// mouse.js
import axios from 'axios';
import { ref } from 'vue'

interface RequestParams {
	currentPage : number
	perPage : number
}

// by convention, composable function names start with "use"
export function usePagination() {

	const results = ref<any[]>([]);
	const total = ref<number | null>(null);
	const from = ref<number | null>(null);
	const currentPage = ref<number | null>(null);
	const perPage = ref<number | null>(null);

	const loading = ref<boolean>(false);
	
	const updatePagination = async (routeApi : string, params : RequestParams) => {
		loading.value = true;
		
		await axios.get(routeApi, {
			params: params
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
		loading
	}
}