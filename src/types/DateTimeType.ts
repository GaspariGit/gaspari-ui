interface TimeType {
	hours : number,
	minutes : number,
	seconds : number
};

type DateType = 'date' | 'time' | 'datetime';

type SelectedDateType = Date | Array<Date> | null | TimeType | Array<TimeType>;

type FormattedDate = string[] | string ;

export type { TimeType, DateType, SelectedDateType, FormattedDate };