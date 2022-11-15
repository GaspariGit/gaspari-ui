import { PropType } from "vue";
declare const _default: import("vue").DefineComponent<{
    isOpen: {
        type: PropType<boolean>;
        required: false;
        default: boolean;
    };
    modalTitle: {
        type: PropType<string>;
        required: false;
        default: string;
    };
    withoutTitle: {
        type: PropType<boolean>;
        default: boolean;
    };
}, {
    emitCloseModal: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    isOpen: {
        type: PropType<boolean>;
        required: false;
        default: boolean;
    };
    modalTitle: {
        type: PropType<string>;
        required: false;
        default: string;
    };
    withoutTitle: {
        type: PropType<boolean>;
        default: boolean;
    };
}>>, {
    isOpen: boolean;
    modalTitle: string;
    withoutTitle: boolean;
}>;
export default _default;
