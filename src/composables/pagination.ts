// mouse.js
import axios from 'axios';
import { ref } from 'vue'

interface RequestParams {
	currentPage : number
	perPage : number
}

// by convention, composable function names start with "use"
export function usePagination() {
	const er = 'er'; 
	const ni = 'ni'; 

	const updatePagination = (routeApi : string, params : RequestParams) => {
		console.log('entratoooo')
		axios.get(routeApi, {
			params: params
		})
		.then((res) => {
			if(res.status === 200) {
				return res.data;
			}
		})
		.catch((error) => {
			return error;
		})
	}

	return {
		er,
		ni,
		updatePagination
	}
}