import { Component, OnInit } from '@angular/core';
import { TableColumn, TableRow } from '../interfaces/ITableData';
import { TableData } from './TableData';

@Component({
  template: '',
})

export abstract class BaseDynamicListComponent implements OnInit, IDynamicTable {
  isLoading = true;
  hasError = false;
  items: any;
  public tableData!: TableData;

  constructor(){
    this.getAsTableData = this.getAsTableData.bind(this);
  }

  abstract renderColumns(): Promise<TableColumn[]>;
  abstract renderRows(item: any, _this: this, index: any): Promise<TableRow>;
  abstract fetchList(): Promise<any>;

  async ngOnInit() {
    await this.refreshTable();
  }

  async refreshTable(){
    try {
      this.isLoading = true;
      await this.getAsTableData(await this.renderColumns(), this.renderRows);
      this.isLoading = false;
    } catch (e) {
      this.hasError = true;
    }
  }

  async getAsTableData(columns: TableColumn[], renderRowFunction: Function) {
    let response = await this.fetchList();
    this.items = response;
    const tableData = new TableData();
    tableData.columns = columns;

    tableData.rows = await Promise.all(response.map(async (item:any, i:number) => renderRowFunction(item, this, i)));
    this.tableData = new TableData(tableData);
    return tableData;
  }
}

export interface IDynamicTable {
  items:any;
  tableData:TableData;
  renderColumns():Promise<TableColumn[]>
  renderRows(item:any, _this:any, index:number): Promise<TableRow>
  getAsTableData(columns: TableColumn[], renderRowFunction: Function): Promise<TableData>
}
