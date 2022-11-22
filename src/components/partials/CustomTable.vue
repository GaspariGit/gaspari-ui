<template>
    <div class="custom-table">
		<div class="text-textGrey font-medium row-pagination flex justify-between items -center">
			<div class="flex">
				<div class="mr-10">20 risultati di 10.000</div>
				<div>Elementi visualizzati: 20</div>
			</div>
			<div>
				Pagination
			</div>
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

<script>
import { defineComponent } from "vue";

export default defineComponent({
    name: 'CustomTable',
    props: {

    },
    setup() {
        const af = 'afff';

        return {
            af
        }
    }
});
</script>