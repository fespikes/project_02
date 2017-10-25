import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaturalLanguageProcessingComponent } from './natural-language-processing.component';

describe('NaturalLanguageProcessingComponent', () => {
  let component: NaturalLanguageProcessingComponent;
  let fixture: ComponentFixture<NaturalLanguageProcessingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaturalLanguageProcessingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaturalLanguageProcessingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
