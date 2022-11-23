import { PropType } from "vue";
import '@ocrv/vue-tailwind-pagination/styles';
declare const _default: import("vue").DefineComponent<{
    title: {
        type: PropType<string>;
        required: false;
    };
    total: {
        type: PropType<number>;
        required: true;
    };
    currentPage: {
        type: PropType<number>;
        default: number;
    };
    perPage: {
        type: PropType<number>;
        default: number;
    };
    from: {
        type: PropType<number>;
        required: true;
    };
    loading: {
        type: PropType<boolean>;
        required: true;
    };
}, {
    changePageData: (e: number) => void;
    changePerPageData: ({ target }: {
        target: any;
    }) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    title: {
        type: PropType<string>;
        required: false;
    };
    total: {
        type: PropType<number>;
        required: true;
    };
    currentPage: {
        type: PropType<number>;
        default: number;
    };
    perPage: {
        type: PropType<number>;
        default: number;
    };
    from: {
        type: PropType<number>;
        required: true;
    };
    loading: {
        type: PropType<boolean>;
        required: true;
    };
}>>, {
    currentPage: number;
    perPage: number;
}>;
export default _default;
