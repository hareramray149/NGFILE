import { Component, ElementRef, ViewChild } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-table-to-multi-sheet-excel',
  templateUrl: './table-to-multi-sheet-excel.component.html',
  styleUrls: ['./table-to-multi-sheet-excel.component.css']
})
export class TableToMultiSheetExcelComponent {

  carCollection1: any = [];
  carCollection2: any = [];
  carCollection3: any = [];

  @ViewChild('table1')
  table1!: ElementRef;
  @ViewChild('table2')
  table2!: ElementRef;
  @ViewChild('table3')
  table3!: ElementRef;

ngOnInit(){
  this.carCollection1 = [{"carType": "Roadster", "Collection": 1 }, {"carType": "SUV", "Collection": 2}, {"carType": "SUPERCAR", "Collection": 3}]
  this.carCollection2 = [{"carType": "Roadster", "Collection": 4 }, {"carType": "SUV", "Collection": 5}, {"carType": "SUPERCAR", "Collection": 6}]
  this.carCollection3 = [{"carType": "Roadster", "Collection": 7 }, {"carType": "SUV", "Collection": 8}, {"carType": "SUPERCAR", "Collection": 9}]
}

export(){

  let ws1: XLSX.WorkSheet=XLSX.utils.table_to_sheet(this.table1.nativeElement);
  let ws2: XLSX.WorkSheet=XLSX.utils.table_to_sheet(this.table2.nativeElement);
  let ws3: XLSX.WorkSheet=XLSX.utils.table_to_sheet(this.table3.nativeElement);

  let wb: XLSX.WorkBook = XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(wb, ws1, 'Sheet1');
  XLSX.utils.book_append_sheet(wb, ws2, 'Sheet2');
  XLSX.utils.book_append_sheet(wb, ws3, 'Sheet3');
  
  XLSX.writeFile(wb,'FileName.xlsx');

}

}
