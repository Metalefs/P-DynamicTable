import {Component, ViewChild, EventEmitter, Input, Output} from '@angular/core';
import {ITableData, RowDataActionType, ColumnType} from '../interfaces/ITableData';
import isEqual from 'lodash.isequal';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
})
export class DynamicTableComponent {
  @Input() table!: ITableData;
  @Input() customClass!: string;
  @ViewChild('ptable') ptable: any;
  @Input() value: any[] = [];
  @Input() columns: any[] = [];
  @Input() columnsWithSubfield: any[] = [];
  @Input() columnsWithCustomWidth = [];
  @Input() columnsWithMask: any;
  @Input() decimalNumbers = 2;
  @Input() isLoading = false;
  @Input() showPaginator = true;
  @Input() showSearch = true;
  @Input() showCurrentPageReport = true;
  @Input() showSortIcon = true;
  @Input() subroutes = null;
  @Input() subrouteId = null;
  @Input() scrollable = false;
  @Input() scrollOrientation = "vertical";
  @Input() scrollDirection = 'vertical';
  @Input() canClick = true;
  @Input() canSelect = false;
  @Input() lazy = false;
  @Input() rows = 20;
  @Input() totalRecords = 0;
  @Input() first = 0;
  @Input() loading = false;
  @Input() scrollHeight = '';
  @Input() delete = false;
  @Input() sortMode: any = 'single';
  @Input() selectionMode: any = 'single';
  @Output() onClick = new EventEmitter<any>();
  @Output() onSelectionChange = new EventEmitter<any>();
  @Output() onLazyLoad = new EventEmitter<any>();
  @Output() rowDeleted = new EventEmitter<any>();
  @Output() rowDelete = new EventEmitter<any>();
  actionType: typeof RowDataActionType = RowDataActionType;
  columnType: typeof ColumnType = ColumnType;

  filterTableDataWithRowData(rowData:any) {
    let oldValue:any = [];
    this.table.rows.forEach((row, i) => {
      let value = {}
      this.table.columns.forEach((col, j) => {
        if (col.prop)
          Object.assign(value, {[col.prop]: row.data[j].content})
      })
      if (isEqual(value, rowData))
        oldValue.push(row?.data);
    })
    return oldValue;
  }
}
