import { PropType } from "vue";
import { Filterable } from '../../types/Filterable';
declare const _default: import("vue").DefineComponent<{
    isOpen: {
        type: PropType<boolean>;
        required: false;
        default: boolean;
    };
    filterables: {
        type: PropType<Filterable>;
        required: true;
    };
    baseApiPath: {
        type: PropType<string>;
        required: true;
        default: string;
    };
}, {
    emitCloseModal: () => void;
    emitFilter: () => void;
    state: import("vue").Ref<{}>;
    loadingState: import("vue").Ref<{}>;
    optionsState: import("vue").Ref<{}>;
    cleanResults: () => void;
    handleChangeRelationsSelect: (e: any, column: string, index: number) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    isOpen: {
        type: PropType<boolean>;
        required: false;
        default: boolean;
    };
    filterables: {
        type: PropType<Filterable>;
        required: true;
    };
    baseApiPath: {
        type: PropType<string>;
        required: true;
        default: string;
    };
}>>, {
    isOpen: boolean;
    baseApiPath: string;
}>;
export default _default;
