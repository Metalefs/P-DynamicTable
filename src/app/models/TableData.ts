import {ITableData, TableColumn, TableRow} from "../interfaces/ITableData";

export class TableData implements ITableData {
  columns: TableColumn[];
  rows: TableRow[];
  oldValue: Array<any> = [];
  oldColumns: Array<any> = [];

  constructor(data?: ITableData) {
    if (data) {
      this.columns = data.columns;
      this.rows = data.rows;
      this.setOldColumns();
      this.setOldValue();
    } else {
      this.columns = [];
      this.rows = [];
      this.oldValue = [];
    }
  }

  public setOldColumns() {
    this.oldColumns = [];
    this.columns.forEach((col, j) => {
      this.oldColumns.push({field: col.prop, header: col.name});
    })
  }

  public setOldValue() {
    this.oldValue = [];
    this.rows.forEach((row, i) => {
      let value = {}
      this.columns.forEach((col, j) => {
        if (col.prop)
          Object.assign(value, {[col.prop]: row.data[j].content})
      })
      this.oldValue.push(value)
    })
  }
}
