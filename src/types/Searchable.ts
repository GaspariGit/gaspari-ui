type MyTypes = 'text'|'select'|'checkbox'|'multiselect';

interface SearchableColumn {
    column : string
    route : string | null
    type : MyTypes
    label : string
    order : number
}

interface SearchableRelation {
    columns : number[]
    route : string
    order : number[] | null
}

interface Searchable {
    columns : SearchableColumn[]
    relations : SearchableRelation[]
}

export default Searchable;