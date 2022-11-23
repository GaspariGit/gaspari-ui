interface RequestParams {
    currentPage: number;
    perPage: number;
}
export declare function usePagination(): {
    results: import("vue").Ref<any[]>;
    currentPage: import("vue").Ref<number>;
    perPage: import("vue").Ref<number>;
    total: import("vue").Ref<number>;
    from: import("vue").Ref<number>;
    updatePagination: (routeApi: string, params: RequestParams) => Promise<void>;
    loading: import("vue").Ref<boolean>;
};
export {};
