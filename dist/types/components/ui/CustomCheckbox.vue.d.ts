import { PropType } from "vue";
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: PropType<boolean>;
    };
    disabled: {
        type: PropType<boolean>;
        default: boolean;
    };
    label: {
        type: StringConstructor;
        required: true;
    };
    name: {
        type: PropType<string>;
        default: string;
    };
    checked: {
        type: PropType<boolean>;
    };
}, unknown, unknown, {}, {
    updateInput(event: any): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: PropType<boolean>;
    };
    disabled: {
        type: PropType<boolean>;
        default: boolean;
    };
    label: {
        type: StringConstructor;
        required: true;
    };
    name: {
        type: PropType<string>;
        default: string;
    };
    checked: {
        type: PropType<boolean>;
    };
}>>, {
    name: string;
    disabled: boolean;
}>;
export default _default;
