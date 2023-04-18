export interface ColumnType<T> {
    key: string;
    title: string;
    isSortable: boolean;
    render: (column: ColumnType<T>, item: T) => JSX.Element;
}

export interface Table<T> {
  data: T[];
  columns: ColumnType<T>[];
  paginationSize: number;
  messageOnEmptyTable: string;
}

// https://dev.to/franciscomendes10866/how-to-build-a-dynamic-table-component-in-react-4ff8