import { PropType } from "vue";
import '@vuepic/vue-datepicker/dist/main.css';
import { DateType } from "../../types/DateTimeType";
declare type ResultType = 'formatted' | 'original';
declare const _default: import("vue").DefineComponent<{
    label: {
        type: PropType<string>;
    };
    range: {
        type: PropType<boolean>;
        default: boolean;
    };
    type: {
        type: PropType<DateType>;
        default: string;
    };
    resultType: {
        type: PropType<ResultType>;
        default: string;
    };
    value: {
        type: PropType<string | string[]>;
    };
}, {
    selectedDate: import("vue").Ref<{
        toString: () => string;
        toDateString: () => string;
        toTimeString: () => string;
        toLocaleString: {
            (): string;
            (locales?: string | string[], options?: Intl.DateTimeFormatOptions): string;
            (locales?: Intl.LocalesArgument, options?: Intl.DateTimeFormatOptions): string;
        };
        toLocaleDateString: {
            (): string;
            (locales?: string | string[], options?: Intl.DateTimeFormatOptions): string;
            (locales?: Intl.LocalesArgument, options?: Intl.DateTimeFormatOptions): string;
        };
        toLocaleTimeString: {
            (): string;
            (locales?: string | string[], options?: Intl.DateTimeFormatOptions): string;
            (locales?: Intl.LocalesArgument, options?: Intl.DateTimeFormatOptions): string;
        };
        valueOf: () => number;
        getTime: () => number;
        getFullYear: () => number;
        getUTCFullYear: () => number;
        getMonth: () => number;
        getUTCMonth: () => number;
        getDate: () => number;
        getUTCDate: () => number;
        getDay: () => number;
        getUTCDay: () => number;
        getHours: () => number;
        getUTCHours: () => number;
        getMinutes: () => number;
        getUTCMinutes: () => number;
        getSeconds: () => number;
        getUTCSeconds: () => number;
        getMilliseconds: () => number;
        getUTCMilliseconds: () => number;
        getTimezoneOffset: () => number;
        setTime: (time: number) => number;
        setMilliseconds: (ms: number) => number;
        setUTCMilliseconds: (ms: number) => number;
        setSeconds: (sec: number, ms?: number) => number;
        setUTCSeconds: (sec: number, ms?: number) => number;
        setMinutes: (min: number, sec?: number, ms?: number) => number;
        setUTCMinutes: (min: number, sec?: number, ms?: number) => number;
        setHours: (hours: number, min?: number, sec?: number, ms?: number) => number;
        setUTCHours: (hours: number, min?: number, sec?: number, ms?: number) => number;
        setDate: (date: number) => number;
        setUTCDate: (date: number) => number;
        setMonth: (month: number, date?: number) => number;
        setUTCMonth: (month: number, date?: number) => number;
        setFullYear: (year: number, month?: number, date?: number) => number;
        setUTCFullYear: (year: number, month?: number, date?: number) => number;
        toUTCString: () => string;
        toISOString: () => string;
        toJSON: (key?: any) => string;
        getVarDate: () => VarDate;
        [Symbol.toPrimitive]: {
            (hint: "default"): string;
            (hint: "string"): string;
            (hint: "number"): number;
            (hint: string): string | number;
        };
    } | {
        toString: () => string;
        toDateString: () => string;
        toTimeString: () => string;
        toLocaleString: {
            (): string;
            (locales?: string | string[], options?: Intl.DateTimeFormatOptions): string;
            (locales?: Intl.LocalesArgument, options?: Intl.DateTimeFormatOptions): string;
        };
        toLocaleDateString: {
            (): string;
            (locales?: string | string[], options?: Intl.DateTimeFormatOptions): string;
            (locales?: Intl.LocalesArgument, options?: Intl.DateTimeFormatOptions): string;
        };
        toLocaleTimeString: {
            (): string;
            (locales?: string | string[], options?: Intl.DateTimeFormatOptions): string;
            (locales?: Intl.LocalesArgument, options?: Intl.DateTimeFormatOptions): string;
        };
        valueOf: () => number;
        getTime: () => number;
        getFullYear: () => number;
        getUTCFullYear: () => number;
        getMonth: () => number;
        getUTCMonth: () => number;
        getDate: () => number;
        getUTCDate: () => number;
        getDay: () => number;
        getUTCDay: () => number;
        getHours: () => number;
        getUTCHours: () => number;
        getMinutes: () => number;
        getUTCMinutes: () => number;
        getSeconds: () => number;
        getUTCSeconds: () => number;
        getMilliseconds: () => number;
        getUTCMilliseconds: () => number;
        getTimezoneOffset: () => number;
        setTime: (time: number) => number;
        setMilliseconds: (ms: number) => number;
        setUTCMilliseconds: (ms: number) => number;
        setSeconds: (sec: number, ms?: number) => number;
        setUTCSeconds: (sec: number, ms?: number) => number;
        setMinutes: (min: number, sec?: number, ms?: number) => number;
        setUTCMinutes: (min: number, sec?: number, ms?: number) => number;
        setHours: (hours: number, min?: number, sec?: number, ms?: number) => number;
        setUTCHours: (hours: number, min?: number, sec?: number, ms?: number) => number;
        setDate: (date: number) => number;
        setUTCDate: (date: number) => number;
        setMonth: (month: number, date?: number) => number;
        setUTCMonth: (month: number, date?: number) => number;
        setFullYear: (year: number, month?: number, date?: number) => number;
        setUTCFullYear: (year: number, month?: number, date?: number) => number;
        toUTCString: () => string;
        toISOString: () => string;
        toJSON: (key?: any) => string;
        getVarDate: () => VarDate;
        [Symbol.toPrimitive]: {
            (hint: "default"): string;
            (hint: "string"): string;
            (hint: "number"): number;
            (hint: string): string | number;
        };
    }[] | {
        hours: number;
        minutes: number;
        seconds: number;
    } | {
        hours: number;
        minutes: number;
        seconds: number;
    }[]>;
    format: (selectedDate: Date) => string;
    getDateType: (type: string) => boolean;
    checkIfOnlyDate: () => void;
    emitDate: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    label: {
        type: PropType<string>;
    };
    range: {
        type: PropType<boolean>;
        default: boolean;
    };
    type: {
        type: PropType<DateType>;
        default: string;
    };
    resultType: {
        type: PropType<ResultType>;
        default: string;
    };
    value: {
        type: PropType<string | string[]>;
    };
}>>, {
    type: DateType;
    range: boolean;
    resultType: ResultType;
}>;
export default _default;
