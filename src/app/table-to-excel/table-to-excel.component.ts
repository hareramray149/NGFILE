import { Component, ElementRef, ViewChild } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-table-to-excel',
  templateUrl: './table-to-excel.component.html',
  styleUrls: ['./table-to-excel.component.css']
})
export class TableToExcelComponent {

carCollection: any = [];

  @ViewChild('table')
  table!: ElementRef;

ngOnInit(){
  this.carCollection = [{"carType": "Roadster", "Collection": 5 }, {"carType": "SUV", "Collection": 7}, {"carType": "SUPERCAR", "Collection": 9}]
}

export(){

  let ws1: XLSX.WorkSheet=XLSX.utils.table_to_sheet(this.table.nativeElement);

  let wb: XLSX.WorkBook = XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(wb, ws1, 'Sheet1');
  
  XLSX.writeFile(wb,'FileName.xlsx');

}

}
