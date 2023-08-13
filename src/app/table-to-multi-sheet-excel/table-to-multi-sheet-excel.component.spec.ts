import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableToMultiSheetExcelComponent } from './table-to-multi-sheet-excel.component';

describe('TableToMultiSheetExcelComponent', () => {
  let component: TableToMultiSheetExcelComponent;
  let fixture: ComponentFixture<TableToMultiSheetExcelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableToMultiSheetExcelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableToMultiSheetExcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
