import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableToCsvComponent } from './table-to-csv.component';

describe('TableToCsvComponent', () => {
  let component: TableToCsvComponent;
  let fixture: ComponentFixture<TableToCsvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableToCsvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableToCsvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
