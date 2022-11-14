interface FileInterface {
    id? : number | string | null;
    name? : string | null;
    original_name : string;
    extension : string;
    author? : Author;
    file_path? : string;
    file_size : number;
    measure_unit : MeasureUnit;
    created_by? : CreatedBy;
    updated_by? : Array<UpdatedBy>;
    created_at? : string;
    updated_at? : string;
    deleted_at? : string | null
}

interface Author {
    id? : number | string
    name : string
}

interface MeasureUnit {
    id? : number | string | null;
    name : string;
    abbreviation : string;
}

interface CreatedBy {
    id? : number | string;
    name : string;
}

interface UpdatedBy {
    id? : string | number;
    name : string;
    date : string;
}

export default FileInterface;