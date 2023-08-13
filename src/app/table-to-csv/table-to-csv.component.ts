import { Component, ElementRef, ViewChild } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-table-to-csv',
  templateUrl: './table-to-csv.component.html',
  styleUrls: ['./table-to-csv.component.css']
})
export class TableToCsvComponent {

  @ViewChild('table')
  table!: ElementRef;

  carCollection: any = [];

ngOnInit(){
  this.carCollection = [{"carType": "Roadster", "Collection": 5 }, {"carType": "SUV", "Collection": 7}, {"carType": "SUPERCAR", "Collection": 9}]
}

export(){
  let ws: XLSX.WorkSheet=XLSX.utils.table_to_sheet(this.table.nativeElement);
  let wb: XLSX.WorkBook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws);
  XLSX.writeFile(wb,'FileName.csv');
}

}
