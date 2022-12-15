interface TimeType {
    hours: number;
    minutes: number;
    seconds: number;
}
declare type DateType = 'date' | 'time' | 'datetime';
declare type SelectedDateType = Date | Array<Date> | null | TimeType | Array<TimeType>;
declare type FormattedDate = string[] | string;
export type { TimeType, DateType, SelectedDateType, FormattedDate };
