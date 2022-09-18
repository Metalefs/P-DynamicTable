import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DynamicListComponent } from './dynamic-list-component/dynamic-list.component';
import { TableModule } from 'primeng/table'
import { NgxCurrencyModule } from 'ngx-currency';
import { NgxMaskModule } from 'ngx-mask';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';
import { RouterModule } from '@angular/router';
import { PrimeNGModule } from './primeng.module';


@NgModule({
  declarations: [
    AppComponent,
    DynamicListComponent,
    DynamicTableComponent,
  ],
  imports: [
    BrowserModule,
    TableModule,
    NgxMaskModule.forRoot(),
    NgxCurrencyModule,
    NoopAnimationsModule,
    PrimeNGModule,
    MatIconModule,
    RouterModule.forRoot([]),
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
