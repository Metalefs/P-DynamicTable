export interface ITableData {
  columns: TableColumn[];
  oldColumns: Array<any>;
  rows: TableRow[];
  oldValue: Array<any>;
  filter?: any;
}

export interface TableColumn {
  name: string;
  type: ColumnType;
  sortBy?: string;
  sortable?: boolean;
  filterable?: boolean;
  cellTemplate?: string;
  flexGrow?: number;
  prop?:string;
}

export interface TableRow {
  data: TableRowData[];
  class: string;
}

export enum ColumnType {
  text = 'text',
  actions = 'actions',
  id = 'id',
  status = 'status',
  icon = 'icon',
  date = 'date',
  number = 'number',
  boolean = 'boolean',
  select = 'select',
  checkbox = 'checkbox',
  link = 'link',
  actionSecondary = 'actionSecondary',
  decimal = 'decimal',
  masked = 'masked',
  unmasked = 'unmasked',
  currency = 'currency'
}

export interface TableRowData {
  content: any;
  className?: string;
  icon?:string;
  colorClass?:string;
  actions?: RowDataAction[];
}

interface RowDataAction {
  name: string;
  onClick: Function;
  type: RowDataActionType;
  icon?: string;
}

export enum RowDataActionType {
  read,
  edit,
  delete,
  download,
  view,
  print,
  share,
  cancel,
  confirm,
  custom,
}
