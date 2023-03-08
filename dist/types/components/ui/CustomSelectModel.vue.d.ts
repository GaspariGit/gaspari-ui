declare const _default: import("vue").DefineComponent<{
    label: {
        type: StringConstructor;
        required: false;
        default: any;
    };
    options: {
        type: ObjectConstructor;
        required: true;
    };
    placeholder: {
        type: StringConstructor;
        requried: boolean;
        default: string;
    };
    selected: {
        type: ObjectConstructor;
        required: true;
    };
    disabled: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}, unknown, unknown, {}, {
    onSelect(value: any): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "select"[], "select", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    label: {
        type: StringConstructor;
        required: false;
        default: any;
    };
    options: {
        type: ObjectConstructor;
        required: true;
    };
    placeholder: {
        type: StringConstructor;
        requried: boolean;
        default: string;
    };
    selected: {
        type: ObjectConstructor;
        required: true;
    };
    disabled: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}>> & {
    onSelect?: (...args: any[]) => any;
}, {
    label: string;
    disabled: boolean;
    placeholder: string;
}>;
export default _default;
