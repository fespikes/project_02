import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { CheckboxComponent } from '../../mock';
import { TableHeadComponent } from './table-head.component';
import { TableComponent } from './table.component';

describe('TableHeadComponent', () => {
  let component: TableHeadComponent;
  let fixture: ComponentFixture<TableHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [ NO_ERRORS_SCHEMA ],
      imports: [ FormsModule ],
      declarations: [
        TableHeadComponent,
        CheckboxComponent,
      ],
      providers: [ TableComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
