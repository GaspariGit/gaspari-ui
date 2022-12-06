import { PropType } from "vue";
import { Searchable } from '../../types/Searchable';
declare const _default: import("vue").DefineComponent<{
    isOpen: {
        type: PropType<boolean>;
        required: false;
        default: boolean;
    };
    searchables: {
        type: PropType<Searchable>;
        required: true;
    };
    baseApiPath: {
        type: PropType<string>;
        required: true;
    };
}, {
    emitCloseModal: () => void;
    emitSearch: () => void;
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
    searchables: {
        type: PropType<Searchable>;
        required: true;
    };
    baseApiPath: {
        type: PropType<string>;
        required: true;
    };
}>>, {
    isOpen: boolean;
}>;
export default _default;
