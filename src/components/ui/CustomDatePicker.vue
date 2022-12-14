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
		@update:model-value="emitDate"	
	/>	
 </div>
</template>

<script lang="ts">
import { defineComponent, ref, PropType, onMounted } from "vue";
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import { DateType, SelectedDateType, FormattedDate } from "../../types/DateTimeType";

type ResultType = 'formatted' | 'original';

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
		},
		resultType: {
			type: String as PropType<ResultType>,
			default: 'formatted'
		},
		value: {
			type: [String, Array] as PropType<string | string[]>
		},
    },
    setup(props, context) {
        const selectedDate = ref<SelectedDateType>(null);

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
					minutes: new Date().getMinutes(),
					seconds: 0
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
					const day = ("0" + selectedDate[0].getDate()).slice(-2);
					const month = ("0" + (selectedDate[0].getMonth() + 1)).slice(-2);
					const year = selectedDate[0].getFullYear();
					const hours = ("0" + (selectedDate[0].getHours())).slice(-2);
					const minutes = ("0" + (selectedDate[0].getMinutes())).slice(-2);					

					if(selectedDate[1]) {
						const day2 = ("0" + selectedDate[1].getDate()).slice(-2);
						const month2 = ("0" + (selectedDate[1].getMonth() + 1)).slice(-2);
						const year2 = selectedDate[1].getFullYear();
						const hours2 = ("0" + (selectedDate[1].getHours())).slice(-2);
						const minutes2 = ("0" + (selectedDate[1].getMinutes())).slice(-2);

						if(props.type !== 'datetime') {
							return `${day}/${month}/${year} - ${day2}/${month2}/${year2}`;
						} else {
							return `${day}/${month}/${year} ${hours}:${minutes} - ${day2}/${month2}/${year2} ${hours2}:${minutes2}`;
						}
					}
				} else {
					const day = ("0" + selectedDate.getDate()).slice(-2);
					const month = ("0" + (selectedDate.getMonth() + 1)).slice(-2);
					const year = selectedDate.getFullYear();
					const hours = ("0" + (selectedDate.getHours())).slice(-2);
					const minutes = ("0" + (selectedDate.getMinutes())).slice(-2);

					if(props.type !== 'datetime') {
						return `${day}/${month}/${year}`;
					} else {
						return `${day}/${month}/${year} ${hours}:${minutes}`;
					}
				}
			} else {
				if(props.range === true) {
					const hours = ("0" + (selectedDate[0].getHours())).slice(-2);
					const minutes = ("0" + (selectedDate[0].getMinutes())).slice(-2);

					const hours2 = ("0" + (selectedDate[1].getHours())).slice(-2);
					const minutes2 = ("0" + (selectedDate[1].getMinutes())).slice(-2);
					return `${hours}:${minutes} - ${hours2}:${minutes2}`;
				} else {
					const hours = ("0" + (selectedDate.getHours())).slice(-2);
					const minutes = ("0" + (selectedDate.getMinutes())).slice(-2);
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

		const emitDate = () => {
			let formatted : FormattedDate;
			if(props.type !== 'time') {
				if(props.range === true) {
					let formattedArray : string[] = [];
					const arrayValues : Date[] = Object.values({...selectedDate.value});

					arrayValues.forEach((date) => {
						const day = ("0" + date.getDate()).slice(-2);
						const month = ("0" + (date.getMonth() + 1)).slice(-2);
						const year = date.getFullYear();
						const hours = ("0" + (date.getHours())).slice(-2);
						const minutes = ("0" + (date.getMinutes())).slice(-2);

						if(props.type !== 'datetime') {
							formattedArray.push(`${month}-${day}-${year}`)
						} else {
							formattedArray.push(`${month}-${day}-${year} ${hours}:${minutes}:00`)
						}
					})

					formatted = formattedArray;
				} else {
					let formattedString = '';
					const date : any = selectedDate.value;
					const day = ("0" + date.getDate()).slice(-2);
					const month = ("0" + (date.getMonth() + 1)).slice(-2);
					const year = date.getFullYear();
					const hours = ("0" + (date.getHours())).slice(-2);
					const minutes = ("0" + (date.getMinutes())).slice(-2);

					if(props.type !== 'datetime') {
						formattedString = (`${month}-${day}-${year}`)
					} else {
						formattedString = (`${month}-${day}-${year} ${hours}:${minutes}:00`);
					}

					formatted = formattedString;
				}
			} else {
				if(props.range === true) {
					let timeArray = [];
					Object.values({...selectedDate.value}).forEach(time => {
						timeArray.push(`${time.hours}:${time.minutes}:00`)
					})

					formatted = timeArray;
				} else {
					const time : any = selectedDate.value;
					const timeString = `${time.hours}:${time.minutes}:00`

					formatted = timeString;
				}
			}

			if(props.resultType === 'original') {
				context.emit('update', {
					formatted: formatted,
					original: selectedDate.value,
					type: props.type
				})
			} else {
				context.emit('update:value', formatted);
			}
		}

		return {
			selectedDate,
			format,
			getDateType,
			checkIfOnlyDate,
			emitDate,
		}
    }
})
</script>