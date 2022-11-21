import { PropType } from "vue";
import BreadcrumbInterface from "../../types/BreadCrumbInterface";
declare const _default: import("vue").DefineComponent<{
    path_breadcrumbs: {
        type: PropType<BreadcrumbInterface[]>;
        required: true;
        default: any[];
    };
}, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    path_breadcrumbs: {
        type: PropType<BreadcrumbInterface[]>;
        required: true;
        default: any[];
    };
}>>, {
    path_breadcrumbs: BreadcrumbInterface[];
}>;
export default _default;
