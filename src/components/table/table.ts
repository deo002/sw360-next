interface Header {
    headerValue: string;
    isSortable: boolean;
}

export interface Table {
    headers: Header[];
    rows: string[][];
    paginationSize: number;
    messageOnEmptyTable: string;
}