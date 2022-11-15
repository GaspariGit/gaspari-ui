import { PropType } from 'vue';
import SelectOptions from '../../types/SelectOptions';
declare const _default: import("vue").DefineComponent<{
    label: {
        type: PropType<string>;
    };
    placeholder: {
        type: PropType<string>;
        default: string;
    };
    optionsSearchRoute: {
        type: PropType<string>;
        required: true;
    };
    selectedOptions: {
        type: PropType<SelectOptions[]>;
        required: true;
    };
}, unknown, {
    value: any[];
    visibleOptions: SelectOptions[];
    loading: boolean;
}, {}, {
    removeOption(option: SelectOptions): void;
    updateModel(): void;
    find(e: string): void;
    debouncedSearch: any;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:selectedOptions"[], "update:selectedOptions", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    label: {
        type: PropType<string>;
    };
    placeholder: {
        type: PropType<string>;
        default: string;
    };
    optionsSearchRoute: {
        type: PropType<string>;
        required: true;
    };
    selectedOptions: {
        type: PropType<SelectOptions[]>;
        required: true;
    };
}>> & {
    "onUpdate:selectedOptions"?: (...args: any[]) => any;
}, {
    placeholder: string;
}>;
export default _default;
