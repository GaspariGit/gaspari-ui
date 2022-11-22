<template>
	<div>
		<custom-table
			:total="10000"
			:perPage="25"	
			:currentPage="1"
			title="Ordini"	
			@changed-pagination="handleUpdatePagination"	
		>
			<template v-slot:t-head>
				<th>
					data
				</th>
				<th>
					cod. cliente
				</th>
				<th>
					cliente
				</th>
				<th>
					cod. ufficio
				</th>
				<th>
					email marketing
				</th>
				<th>
					agente
				</th>
				<th>
					stato
				</th>
				<th>
					&nbsp;
				</th>
			</template>
			<template v-slot:t-body>
				<tr>
					<td>
						11/03/1998
					</td>
					<td>
						ODTC078
					</td>
					<td>
						Municipio di Cortenova
					</td>
					<td>
						UF6A1W
					</td>
					<td>
						NO
					</td>
					<td>
						Mario Rossi
					</td>
					<td>
						Inviato
					</td>
					<td>
						!
					</td>
				</tr>
			</template>
		</custom-table>

		{{er}}{{ni}}

	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CustomTable from "../../src/components/partials/CustomTable.vue";
import { usePagination } from "../../src/composables/pagination";


export default defineComponent({
	name: 'HomeView',
	components: {
		CustomTable
	},
	setup() {
		const handleUpdatePagination = (e) => {
			updatePagination('https://devapi00.gruppogaspari.net/api/v1/cities', e)
		};

		const {er, ni, updatePagination} = usePagination();

		

		return {
			handleUpdatePagination,
			er,
			ni
		}
	}
})
</script>