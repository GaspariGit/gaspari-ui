import { PropType } from "vue";
declare type position = 'top' | 'left' | 'bottom' | 'right';
declare const _default: import("vue").DefineComponent<{
    position: {
        type: PropType<position>;
        default: string;
    };
    backroundColor: {
        type: PropType<string>;
        default: string;
    };
    maxWidth: {
        type: PropType<number>;
        default: number;
    };
}, {
    onMouseOver: () => void;
    getClassPosition: () => string;
    onMouseLeave: () => void;
    hovered: import("vue").Ref<boolean>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    position: {
        type: PropType<position>;
        default: string;
    };
    backroundColor: {
        type: PropType<string>;
        default: string;
    };
    maxWidth: {
        type: PropType<number>;
        default: number;
    };
}>>, {
    maxWidth: number;
    position: position;
    backroundColor: string;
}>;
export default _default;
