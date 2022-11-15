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
    options: {
        type: PropType<SelectOptions[]>;
        required: true;
    };
    selectedOptions: {
        type: PropType<string[] | number[]>;
        required: true;
    };
}, unknown, {
    value: any[];
    visibleOptions: SelectOptions[];
}, {}, {
    removeOption(option: SelectOptions): void;
    find(e: string): void;
    updateModel(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:selectedOptions"[], "update:selectedOptions", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    label: {
        type: PropType<string>;
    };
    placeholder: {
        type: PropType<string>;
        default: string;
    };
    options: {
        type: PropType<SelectOptions[]>;
        required: true;
    };
    selectedOptions: {
        type: PropType<string[] | number[]>;
        required: true;
    };
}>> & {
    "onUpdate:selectedOptions"?: (...args: any[]) => any;
}, {
    placeholder: string;
}>;
export default _default;
