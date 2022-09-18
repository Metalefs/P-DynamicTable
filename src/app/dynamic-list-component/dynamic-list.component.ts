import { Component, OnInit } from '@angular/core';
import { TableColumn, ColumnType, TableRow, RowDataActionType } from '../interfaces/ITableData';
import { BaseDynamicListComponent } from '../models/BaseDynamicListComponent';

@Component({
  selector: 'app-dynamic-list',
  template: `
    <app-dynamic-table
      [table]="tableData"
      [showSearch]="false"
      [isLoading]="isLoading"
      [rows]="3"
      (onClick)="null"
    ></app-dynamic-table>
  `,
})
export class DynamicListComponent extends BaseDynamicListComponent implements OnInit {
  constructor() {
    super();
    this.fetchList = this.fetchList.bind(this);
    this.renderColumns = this.renderColumns.bind(this);
    this.renderRows = this.renderRows.bind(this);
  }
  itemService = [
    {id: '1', name: "I'm a name", status:'Super alive', canFly: false, canSwim: true, deathDate: null},
    {id: '2', name: "I'm a Test name", status:'Purgatory', canFly: true, canSwim: false, deathDate: new Date(2000)},
    {id: '3', name: "I'm sea monster", status:'Under the ocean', canFly: false, canSwim: true, deathDate: null},
    {id: '3', name: "I'm pagination test", status:'The other page', canFly: false, canSwim: true, deathDate: null},
  ];
  fetchList(): Promise<any> {
    return Promise.resolve(this.itemService);
  }

  async renderColumns(): Promise<TableColumn[]> {
    return [
      {
        name: 'ID',
        prop: "id",
        type: ColumnType.id,
      },
      {
        name: 'Name',
        prop: "name",
        type: ColumnType.text,
      },
      {
        name: "Status",
        prop: "status",
        type: ColumnType.status,
      },
      {
        name: "Can Fly",
        prop: "canFly",
        type: ColumnType.boolean,
      },
      {
        name: "Can Swim",
        prop: "canSwim",
        type: ColumnType.boolean,
      },
      {
        name: "Death date",
        prop: "deathDate",
        type: ColumnType.date,
      },
      {
        name: "What to do",
        prop: "actions",
        type: ColumnType.actions,
      },
    ]
  }

  async renderRows(item: any, _this: any, index:number): Promise<TableRow> {
    return {
      data: [
        {
          content: item.id,
        },
        {
          content: item.name,
        },
        {
          content: item.status,
          colorClass: _this.getStatusColorClass(item)
        },
        {
          content: item.canFly,
        },
        {
          content: item.canSwim,
        },
        {
          content: item.deathDate,
        },
        {
          content: '',
          actions: [
            {
              name: "Set death Date",
              type: RowDataActionType.edit,
              onClick: (idx) => {
                _this.setItemDeathDate(item,idx);
              },
            },
          ],
        },
      ],
      class: "",
    }
  }

  setItemDeathDate(item, idx:any){
    //const _item = this.items[idx];
    if(item.deathDate != null) return;
    item.deathDate = new Date();
    item.status = 'Purgatory'
    item.canSwim = false;
    item.canFly = true;
    this.refreshTable();
  }

  getStatusColorClass(item){
    const status = item.status.toLowerCase();
    switch (status) {
      case 'super alive':
        return 'statusBubble success';
      case 'purgatory':
        return 'statusBubble warning'
      case 'the other page':
        return 'statusBubble success'
    }
    return 'statusBubble warning'
  }
}
