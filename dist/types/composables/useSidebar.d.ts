interface ResponseSidebar {
    [propName: string]: any;
}
export declare function useSidebar(): {
    openDetails: (routeShow: string, index: number) => Promise<void>;
    openSidebar: () => void;
    closeSidebar: () => void;
    activeRecordIndex: import("vue").Ref<number>;
    isOpenSidebar: import("vue").Ref<boolean>;
    isLoadingSidebar: import("vue").Ref<boolean>;
    sidebarData: import("vue").Ref<ResponseSidebar>;
};
export {};
