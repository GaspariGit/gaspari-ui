<template>
	<div>
		<custom-table>
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
					-
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
						-
					</td>
				</tr>
			</template>
		</custom-table>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CustomTable from "../../src/components/partials/CustomTable.vue";


export default defineComponent({
	name: 'HomeView',
	components: {
		CustomTable
	},
	setup() {
		console.log('HomeView')
		let ciao = 'ciaoooo';
		return {
			ciao
		}
	}
})
</script>