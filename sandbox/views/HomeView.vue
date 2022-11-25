<template>
	<div>
		<custom-sidebar 
			@close-sidebar="closeSidebar" 			
			:isOpen="isOpenSidebar"
			:loading="isLoadingSidebar"
			:title="sidebarData?.properties.name"
		>						
			<template v-slot:sidebar-content>
				<div v-if="sidebarData !== null">
					<div class="mb-2"><span class="font-semibold">Codice catastale:</span> {{ sidebarData.properties.cadastral_code }}</div>
					<div class="mb-2"><span class="font-semibold">Unità territoriale:</span> {{ sidebarData.properties.territorial_unit }}</div>
					<div class="mb-2"><span class="font-semibold">Città metropolitata:</span> {{ sidebarData.properties.is_metropolitan_city ? 'SI' : 'NO' }}</div>
					<div class="mb-2"><span class="font-semibold">Divisione geografica:</span> {{ sidebarData.properties.geographical_division }}</div>
					<div class="mb-2"><span class="font-semibold">Codice IPA:</span> {{ sidebarData.properties.ipaCode }}</div>
					<div class="mb-2"><span class="font-semibold">Codice ISTAT alfanumerico:</span> {{ sidebarData.properties.istat_code_alpha }}</div>
					<div class="mb-2"><span class="font-semibold">Codice ISTAT numerico:</span> {{ sidebarData.properties.istat_code_numeric }}</div>
					<div class="mb-2"><span class="font-semibold">Sigla:</span> {{ sidebarData.properties.plate_abbreviation }}</div>
					<div class="mb-2"><span class="font-semibold">Provincia:</span> {{ sidebarData.properties.province.name }}</div>
					<div class="mb-2"><span class="font-semibold">Regione:</span> {{ sidebarData.properties.region.name }}</div>

					<h5 class="mt-6 mb-3 text-xl font-bold text-black">Statistiche:</h5>
					<div class="mb-2"><span class="font-semibold">Zona altimetrica:</span> {{ sidebarData.statistics.altimetric_zone }}</div>
					<div class="mb-2"><span class="font-semibold">Altitudine:</span> {{ sidebarData.statistics.altitude }}</div>
					<div class="mb-2"><span class="font-semibold">Popolazione legale:</span> {{ sidebarData.statistics.legal_population }}</div>
					<div class="mb-2"><span class="font-semibold">Popolazione residente:</span> {{ sidebarData.statistics.resident_population }}</div>					
				</div>
				<div v-else>Si è verificato un problema...</div>
			</template>
		</custom-sidebar>

		<custom-table
			:total="total"
			:perPage="perPage"	
			:currentPage="currentPage"
			:from="from"
			title="Ordini"	
			@changed-pagination="handleUpdatePagination"	
			:loading="loading"
		>
			<template v-slot:filters>Filters</template>

			<template v-slot:t-head>
				<th 
					@click="handleUpdatePaginationWithOrder('name')" 
					class="cursor-pointer ordered"
					:class="setPaginationOrderClasses('name')"
				>
					Nome
				</th>
				<th 
					@click="handleUpdatePaginationWithOrder('cadastral_code')" 
					class="cursor-pointer ordered"
					:class="setPaginationOrderClasses('cadastral_code')"
				>
					cod. catastale
				</th>
				<th name="is_metropolitan_city">
					città metropolitana
				</th>
				<th name="istat_code_alpha">
					cod. istat (alpha)
				</th>
				<th name="province_name">
					provincia
				</th>
				<th name="region_name">
					regione
				</th>
				<th>
					&nbsp;
				</th>
			</template>
			<template v-slot:t-body>
				<tr v-for="(item, index) in results" :key="index" @click="handleOpenDetails(item.id, index)">
					<td class="relative" :class="{recordActive : index === activeRecordIndex}">
						{{ item.properties.name }}
					</td>
					<td>
						{{ item.properties.cadastral_code }}
					</td>
					<td>
						{{ item.properties.is_metropolitan_city ? 'SI' : 'NO' }}
					</td>
					<td>
						{{ item.properties.istat_code_alpha }}
					</td>
					<td>
						{{ item.properties.province_name }}
					</td>
					<td>
						{{ item.properties.region_name }}
					</td>
					<td>
						<div class="flex items-center">
							<div class="w-8 h-8 cursor-pointer rounded-full bg-textGrey  text-white flex items-center justify-center">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFF" class="w-5 h-5">
									<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
								</svg>
							</div>
						</div>						
					</td>
				</tr>
			</template>
		</custom-table>
	</div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import CustomTable from "../../src/components/partials/CustomTable.vue";
import { usePagination } from "../../src/composables/usePagination";
import { useSidebar } from "../../src/composables/useSidebar";
import CustomSidebar from "../../src/components/partials/CustomSidebar.vue";

export default defineComponent({
	name: 'HomeView',
	components: {
		CustomTable,
		CustomSidebar
	},
	setup() {
		// Gestione paginazione tabella
		const { 
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
		} = usePagination();

		onMounted(async () => {
			await updatePagination('https://devapi00.gruppogaspari.net/api/v1/cities', {
				perPage: 25,
				currentPage: 1
			})
		})

		const handleUpdatePagination = async (e) => {
			updatePagination('https://devapi00.gruppogaspari.net/api/v1/cities', e)
		};	
		
		const handleUpdatePaginationWithOrder = (columnName : string) => {
			setPaginationOrder(columnName);
			updatePagination('https://devapi00.gruppogaspari.net/api/v1/cities', {
				perPage: perPage.value,
				currentPage: currentPage.value
			})
		}

		// Gestione Sidebar
		const {
			openDetails,
			closeSidebar,
			activeRecordIndex,
			isOpenSidebar,
			isLoadingSidebar,	
			sidebarData		
		} = useSidebar();
		
		const handleOpenDetails = async (id: number, index: number) => {
			await openDetails('https://devapi00.gruppogaspari.net/api/v1/cities/' + id, index)
		}

		return {
			handleUpdatePagination,
			handleUpdatePaginationWithOrder,
			results,
			currentPage,
			perPage,
			total,
			from,
			loading,
			currentOrderBy,
			currentOrderByDirection,
			setPaginationOrderClasses,

			handleOpenDetails,
			closeSidebar,
			activeRecordIndex,
			isOpenSidebar,
			isLoadingSidebar,
			sidebarData,
		}
	}
})
</script>