import { PropType } from "vue";
declare const _default: import("vue").DefineComponent<{
    isOpen: {
        type: PropType<boolean>;
        default: boolean;
    };
    title: {
        type: PropType<string>;
        required: false;
        default: string;
    };
    loading: {
        type: PropType<boolean>;
        default: boolean;
    };
}, {
    emitCloseSidebar: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    isOpen: {
        type: PropType<boolean>;
        default: boolean;
    };
    title: {
        type: PropType<string>;
        required: false;
        default: string;
    };
    loading: {
        type: PropType<boolean>;
        default: boolean;
    };
}>>, {
    loading: boolean;
    title: string;
    isOpen: boolean;
}>;
export default _default;
