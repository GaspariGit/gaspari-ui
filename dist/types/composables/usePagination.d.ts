interface RequestParams {
    currentPage: number;
    perPage: number;
    search?: {};
}
export declare function usePagination(): {
    results: import("vue").Ref<any[]>;
    currentPage: import("vue").Ref<number>;
    perPage: import("vue").Ref<number>;
    total: import("vue").Ref<number>;
    from: import("vue").Ref<number>;
    filterables: any;
    setFilterParams: (filter: any) => void;
    updatePagination: (routeApi: string, params: RequestParams) => Promise<void>;
    loadingPagination: import("vue").Ref<boolean>;
    setPaginationOrder: (orderByColumn: string) => void;
    setPaginationOrderClasses: (orderByColumn: string) => {
        ordered_asc: boolean;
        ordered_desc: boolean;
    };
    setSearchQuery: (query: string) => void;
};
export {};
