import { NO_ERRORS_SCHEMA, Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { CheckboxComponent } from '../../mock';
import { TableRowComponent } from './table-row.component';
import { TableComponent } from './table.component';
import { TableFlexService } from './table-flex.service';

@Component({
  template: `
    <tcc-table-row [tccTableRowDatum]="datum">
      <div title="custom">{{ datum.id }}</div>
      <div>{{ datum.name }}</div>
    </tcc-table-row>
  `,
})
class TestComponent {
  datum = { id: 1, name: 'test'};
}

describe('TableRowComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [ NO_ERRORS_SCHEMA ],
      imports: [FormsModule],
      declarations: [
        TableRowComponent,
        CheckboxComponent,
        TestComponent,
      ],
      providers: [
        TableComponent,
        TableFlexService,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
