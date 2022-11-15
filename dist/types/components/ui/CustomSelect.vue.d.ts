import { PropType } from "vue";
import SelectOptions from "../../types/SelectOptions";
declare const _default: import("vue").DefineComponent<{
    options: {
        type: PropType<SelectOptions[]>;
        required: true;
    };
    label: {
        type: PropType<string>;
        required: false;
    };
    name: {
        type: PropType<string>;
        required: true;
    };
    value: {
        type: PropType<string | number>;
    };
    placeholder: {
        type: PropType<string>;
        default: string;
        required: false;
    };
    disabled: {
        type: PropType<boolean>;
        default: boolean;
    };
}, {
    handleSelectChange: ({ target }: {
        target: any;
    }) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    options: {
        type: PropType<SelectOptions[]>;
        required: true;
    };
    label: {
        type: PropType<string>;
        required: false;
    };
    name: {
        type: PropType<string>;
        required: true;
    };
    value: {
        type: PropType<string | number>;
    };
    placeholder: {
        type: PropType<string>;
        default: string;
        required: false;
    };
    disabled: {
        type: PropType<boolean>;
        default: boolean;
    };
}>>, {
    disabled: boolean;
    placeholder: string;
}>;
export default _default;
