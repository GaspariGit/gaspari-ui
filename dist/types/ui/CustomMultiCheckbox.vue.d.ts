import { PropType } from 'vue';
import MultiCheckboxOptions from '../types/MultiCheckboxOptions';
declare const _default: import("vue").DefineComponent<{
    value: {
        type: PropType<(string | number)[]>;
    };
    options: {
        type: PropType<MultiCheckboxOptions[]>;
        required: true;
    };
}, {
    check: (optionId: string | number, checked: boolean) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    value: {
        type: PropType<(string | number)[]>;
    };
    options: {
        type: PropType<MultiCheckboxOptions[]>;
        required: true;
    };
}>>, {}>;
export default _default;
