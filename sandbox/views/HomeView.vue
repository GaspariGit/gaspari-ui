<template>
	<div>
		<custom-table
			:total="10000"
			:perPage="perPage"	
			:currentPage="currentPage"
			:from="1"
			title="Ordini"	
			@changed-pagination="handleUpdatePagination"	
			:loading="loading"
		>
			<template v-slot:filters>Filters</template>

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
				<tr v-for="(item, index) in 25" :key="index">
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
	</div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import CustomTable from "../../src/components/partials/CustomTable.vue";
import { usePagination } from "../../src/composables/usePagination";

export default defineComponent({
	name: 'HomeView',
	components: {
		CustomTable
	},
	setup() {
		const { 
			results,
			currentPage,
			perPage,
			total,
			from,
			updatePagination,
			loading
		} = usePagination();

		onMounted(async () => {
			await updatePagination('https://devapi00.gruppogaspari.net/api/v1/cities?max=25', {
				perPage: 50,
				currentPage: 1
			})
		})

		const handleUpdatePagination = (e) => {
			updatePagination('https://devapi00.gruppogaspari.net/api/v1/cities?max=25', e)
		};

		return {
			handleUpdatePagination,
			results,
			currentPage,
			perPage,
			total,
			from,
			loading
		}
	}
})
</script>