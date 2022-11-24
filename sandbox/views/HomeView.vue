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
					Il passaggio standard del Lorem Ipsum, utilizzato sin dal sedicesimo secolo
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

					La sezione 1.10.32 del "de Finibus Bonorum et Malorum", scritto da Cicerone nel 45 AC
					"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"

					Traduzione del 1914 di H. Rackham
					"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"

					La sezione 1.10.33 del "de Finibus Bonorum et Malorum", scritto da Cicerone nel 45 AC
					"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."

					Traduzione del 1914 di H. Rackham
					"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
				</div>
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
				<th>
					Nome
				</th>
				<th>
					cod. catastale
				</th>
				<th>
					città metropolitana
				</th>
				<th>
					cod. istat (alpha)
				</th>
				<th>
					provincia
				</th>
				<th>
					regione
				</th>
				<th>
					&nbsp;
				</th>
			</template>
			<template v-slot:t-body>
				<tr v-for="(item, index) in results" :key="index">
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
						<div class="flex items-center" @click="handleOpenDetails(item.id, index)">
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
			await updatePagination('https://devapi00.gruppogaspari.net/api/v1/cities', {
				perPage: 25,
				currentPage: 1
			})
		})

		const handleUpdatePagination = (e) => {
			updatePagination('https://devapi00.gruppogaspari.net/api/v1/cities', e)
		};

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
			results,
			currentPage,
			perPage,
			total,
			from,
			loading,

			handleOpenDetails,

			closeSidebar,
			activeRecordIndex,
			isOpenSidebar,
			isLoadingSidebar,
			sidebarData
		}
	}
})
</script>