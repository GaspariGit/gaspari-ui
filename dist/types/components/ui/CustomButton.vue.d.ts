import { PropType } from "vue";
declare const _default: import("vue").DefineComponent<{
    label: {
        type: PropType<string>;
        required: false;
    };
    styleType: {
        type: PropType<string>;
        required: false;
        default: string;
    };
    size: {
        type: PropType<string>;
        required: false;
        default: string;
    };
    disabled: {
        type: PropType<boolean>;
        required: false;
        default: boolean;
    };
}, {
    assignStyle: () => string;
    handleClick: (e: any) => any;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    label: {
        type: PropType<string>;
        required: false;
    };
    styleType: {
        type: PropType<string>;
        required: false;
        default: string;
    };
    size: {
        type: PropType<string>;
        required: false;
        default: string;
    };
    disabled: {
        type: PropType<boolean>;
        required: false;
        default: boolean;
    };
}>>, {
    disabled: boolean;
    size: string;
    styleType: string;
}>;
export default _default;
