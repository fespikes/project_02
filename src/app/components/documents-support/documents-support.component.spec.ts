import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentsSupportComponent } from './documents-support.component';

describe('DocumentsSupportComponent', () => {
  let component: DocumentsSupportComponent;
  let fixture: ComponentFixture<DocumentsSupportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentsSupportComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentsSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
