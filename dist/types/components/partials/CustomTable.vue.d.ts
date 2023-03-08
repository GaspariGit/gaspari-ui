import '@ocrv/vue-tailwind-pagination/styles';
declare const _default: import("vue").DefineComponent<{
    title: {
        type: StringConstructor;
        required: false;
    };
    total: {
        type: NumberConstructor;
        required: true;
    };
    currentPage: {
        type: NumberConstructor;
        default: number;
    };
    perPage: {
        type: NumberConstructor;
        default: number;
    };
    from: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    loading: {
        type: BooleanConstructor;
        required: true;
    };
}, {
    changePageData: (e: number) => void;
    changePerPageData: ({ target }: {
        target: any;
    }) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    title: {
        type: StringConstructor;
        required: false;
    };
    total: {
        type: NumberConstructor;
        required: true;
    };
    currentPage: {
        type: NumberConstructor;
        default: number;
    };
    perPage: {
        type: NumberConstructor;
        default: number;
    };
    from: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    loading: {
        type: BooleanConstructor;
        required: true;
    };
}>>, {
    from: number;
    currentPage: number;
    perPage: number;
}>;
export default _default;
