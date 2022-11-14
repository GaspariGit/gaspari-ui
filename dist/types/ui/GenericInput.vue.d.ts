import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    classes: {
        required: false;
        default: string;
        type: PropType<string>;
    };
    modelValue: {
        type: PropType<string>;
        default: string;
    };
    label: {
        type: PropType<string>;
        required: false;
    };
    readOnly: {
        type: PropType<boolean>;
        default: boolean;
    };
}, {
    computedValue: import("vue").WritableComputedRef<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update"[], "update", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    classes: {
        required: false;
        default: string;
        type: PropType<string>;
    };
    modelValue: {
        type: PropType<string>;
        default: string;
    };
    label: {
        type: PropType<string>;
        required: false;
    };
    readOnly: {
        type: PropType<boolean>;
        default: boolean;
    };
}>> & {
    onUpdate?: (...args: any[]) => any;
}, {
    modelValue: string;
    classes: string;
    readOnly: boolean;
}>;
export default _default;
