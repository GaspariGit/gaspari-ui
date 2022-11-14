import { PropType } from "vue";
declare const _default: import("vue").DefineComponent<{
    label: {
        type: PropType<string>;
        required: false;
    };
    placeholder: {
        type: PropType<string>;
        required: false;
        default: string;
    };
    file: {
        type: PropType<File>;
        required: false;
    };
}, {
    inputFileRef: any;
    handleButtonClick: () => void;
    handleInputChange: ({ target }: {
        target: any;
    }) => void;
    currentFile: import("vue").Ref<{
        readonly lastModified: number;
        readonly name: string;
        readonly webkitRelativePath: string;
        readonly size: number;
        readonly type: string;
        arrayBuffer: () => Promise<ArrayBuffer>;
        slice: (start?: number, end?: number, contentType?: string) => Blob;
        stream: () => ReadableStream<Uint8Array>;
        text: () => Promise<string>;
    }>;
    deleteFile: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    label: {
        type: PropType<string>;
        required: false;
    };
    placeholder: {
        type: PropType<string>;
        required: false;
        default: string;
    };
    file: {
        type: PropType<File>;
        required: false;
    };
}>>, {
    placeholder: string;
}>;
export default _default;
