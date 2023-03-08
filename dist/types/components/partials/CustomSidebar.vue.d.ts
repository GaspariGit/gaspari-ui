declare const _default: import("vue").DefineComponent<{
    isOpen: {
        type: BooleanConstructor;
        default: boolean;
    };
    title: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    emitCloseSidebar: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    isOpen: {
        type: BooleanConstructor;
        default: boolean;
    };
    title: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    loading: boolean;
    title: string;
    isOpen: boolean;
}>;
export default _default;
