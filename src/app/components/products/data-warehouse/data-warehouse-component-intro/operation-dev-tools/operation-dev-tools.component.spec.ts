import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationDevToolsComponent } from './operation-dev-tools.component';

describe('OperationDevToolsComponent', () => {
  let component: OperationDevToolsComponent;
  let fixture: ComponentFixture<OperationDevToolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationDevToolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationDevToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
