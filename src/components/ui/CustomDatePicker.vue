<template>
 <div class="custom-date-picker generic-input" :class="{ 'no-time' : type === 'date' }">
	<label class="generic-input__label text-sm secondary-color" v-if="label">
		{{ label }}
	</label>
	<Datepicker 
		v-model="(selectedDate)"
		locale="it"		
		:range="range"
		position="left"
		:format="format"
		:time-picker="getDateType('time')"		
		@open="checkIfOnlyDate"
	/>	
 </div>
</template>

<script lang="ts">
import { defineComponent, ref, PropType, onMounted } from "vue";
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

type DateType = 'date' | 'time' | 'datetime';
type Time = {
	hours : number,
	minutes : number
}

export default defineComponent({
    name: "CustomDatePicker",
	components: {
		Datepicker
	},
    props: {
		label: {
			type: String as PropType<string>
		},
		range: {
			type: Boolean as PropType<boolean>,
			default: false
		},
		type: {
			type: String as PropType<DateType>,
			default: 'date'
		}
    },
    setup(props) {
        const selectedDate = ref< Date | Array<Date> | null | Time | Array<Time> >(null);		

		onMounted(() => {
			if(props.type !== 'time') {
				if(props.range === true) {
					const startDate = new Date();
					const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
					selectedDate.value = [startDate, endDate];
				} else {
					selectedDate.value = new Date;
				}
			} else {
				const startTime = {
					hours: new Date().getHours(),
					minutes: new Date().getMinutes()
				};

				if(props.range === true) {
					const endTime = {...startTime}
					selectedDate.value = [startTime, endTime];
				} else {
					selectedDate.value = startTime;
				}
			}
		})

		const format = (selectedDate : Date) => {
            if(props.type !== 'time') {
				if(props.range === true) {
					const day = selectedDate[0].getDate();
					const month = selectedDate[0].getMonth() + 1;
					const year = selectedDate[0].getFullYear();
					const hours = selectedDate[0].getHours();
					const minutes = selectedDate[0].getMinutes();					

					const day2 = selectedDate[1].getDate();
					const month2 = selectedDate[1].getMonth() + 1;
					const year2 = selectedDate[1].getFullYear();
					const hours2 = selectedDate[1].getHours();
					const minutes2 = selectedDate[1].getMinutes();

					if(props.type !== 'datetime') {
						return `${day}/${month}/${year} - ${day2}/${month2}/${year2}`;
					} else {
						return `${day}/${month}/${year} ${hours}:${minutes} - ${day2}/${month2}/${year2} ${hours2}:${minutes2}`;
					}
				} else {
					const day = selectedDate.getDate();
					const month = selectedDate.getMonth() + 1;
					const year = selectedDate.getFullYear();
					const hours = selectedDate.getHours();
					const minutes = selectedDate.getMinutes();

					if(props.type !== 'datetime') {
						return `${day}/${month}/${year}`;
					} else {
						return `${day}/${month}/${year} ${hours}:${minutes}`;
					}
				}
			} else {
				if(props.range === true) {
					const hours = selectedDate[0].getHours();
					const minutes = selectedDate[0].getMinutes();

					const hours2 = selectedDate[1].getHours();
					const minutes2 = selectedDate[1].getMinutes();
					return `${hours}:${minutes} - ${hours2}:${minutes2}`;
				} else {
					const hours = selectedDate.getHours();
					const minutes = selectedDate.getMinutes();
					return `${hours}:${minutes}`;
				}
			}
        }

		const getDateType = (type : string) => {
			return type === props.type;
		}

		const checkIfOnlyDate = () => {
			if(props.type === 'date') {
				const buttonHours = document.querySelector<HTMLElement>('.dp__instance_calendar .dp__button');
				if(buttonHours) {
					buttonHours.style.display = 'none';
				}
			}
		}

		return {
			selectedDate,
			format,
			getDateType,
			checkIfOnlyDate		
		}
    }
})
</script>