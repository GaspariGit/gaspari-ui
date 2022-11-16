import { PropType } from 'vue';
import ListItem from '../../types/ListItem';
declare const _default: import("vue").DefineComponent<{
    menuStructure: {
        type: PropType<ListItem[]>;
        required: true;
    };
}, {
    siteLogoImage: any;
    showSubMenu: (index: number, e: Event) => void;
    currentMenu: import("vue").Ref<{
        id?: string | number;
        href?: string;
        label: string;
        children: any[];
    }>;
    isVisibleSubMenu: import("vue").Ref<boolean>;
    menuElementRef: any;
    navigationRef: any;
    forceClose: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    menuStructure: {
        type: PropType<ListItem[]>;
        required: true;
    };
}>>, {}>;
export default _default;
