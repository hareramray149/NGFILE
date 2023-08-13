import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableToExcelComponent } from './table-to-excel/table-to-excel.component';
import { TableToCsvComponent } from './table-to-csv/table-to-csv.component';
import { TableToMultiSheetExcelComponent } from './table-to-multi-sheet-excel/table-to-multi-sheet-excel.component';

@NgModule({
  declarations: [
    AppComponent,
    TableToExcelComponent,
    TableToCsvComponent,
    TableToMultiSheetExcelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
