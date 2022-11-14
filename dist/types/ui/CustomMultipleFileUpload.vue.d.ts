import { PropType } from "vue";
declare const _default: import("vue").DefineComponent<{
    label: {
        type: PropType<string>;
        required: false;
    };
    routeGetFiles: {
        type: PropType<string>;
        required: true;
    };
    routePostFiles: {
        type: PropType<string>;
        required: true;
    };
    routeDeleteFile: {
        type: PropType<string>;
        required: true;
    };
}, {
    handleClick: () => void;
    handleInputChange: ({ target }: {
        target: any;
    }) => void;
    inputFileRef: any;
    fileList: import("vue").Ref<{
        id?: string | number;
        name?: string;
        original_name: string;
        extension: string;
        author?: {
            id?: string | number;
            name: string;
        };
        file_path?: string;
        file_size: number;
        measure_unit: {
            id?: string | number;
            name: string;
            abbreviation: string;
        };
        created_by?: {
            id?: string | number;
            name: string;
        };
        updated_by?: {
            id?: string | number;
            name: string;
            date: string;
        }[];
        created_at?: string;
        updated_at?: string;
        deleted_at?: string;
    }[]>;
    deleteFile: (index: number) => void;
    getFiles: () => void;
    loading: import("vue").Ref<boolean>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    label: {
        type: PropType<string>;
        required: false;
    };
    routeGetFiles: {
        type: PropType<string>;
        required: true;
    };
    routePostFiles: {
        type: PropType<string>;
        required: true;
    };
    routeDeleteFile: {
        type: PropType<string>;
        required: true;
    };
}>>, {}>;
export default _default;
