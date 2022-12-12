declare type MyTypes = 'text' | 'select' | 'checkbox' | 'multiselect';
interface FilterableColumn {
    column: string;
    route: string | null;
    type: MyTypes;
    label: string;
    order: number;
    placeholder: string;
}
interface FilterableRelation {
    columns: number[];
    route: string;
    order: number[] | null;
}
interface Filterable {
    columns: FilterableColumn[];
    relations: FilterableRelation[];
}
export type { FilterableColumn, FilterableRelation, Filterable };
