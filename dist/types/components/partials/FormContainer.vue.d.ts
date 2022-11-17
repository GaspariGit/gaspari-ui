import { PropType } from "vue";
import BreadCrumbInterface from '../../types/BreadCrumbInterface';
declare const _default: import("vue").DefineComponent<{
    path_breadcrumbs: {
        type: PropType<BreadCrumbInterface[]>;
        required: false;
        default: any[];
    };
    title: {
        type: PropType<string>;
        required: false;
    };
}, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    path_breadcrumbs: {
        type: PropType<BreadCrumbInterface[]>;
        required: false;
        default: any[];
    };
    title: {
        type: PropType<string>;
        required: false;
    };
}>>, {
    path_breadcrumbs: BreadCrumbInterface[];
}>;
export default _default;
