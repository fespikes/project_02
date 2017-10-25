import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreciseMarketingComponent } from './precise-marketing.component';

describe('PreciseMarketingComponent', () => {
  let component: PreciseMarketingComponent;
  let fixture: ComponentFixture<PreciseMarketingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreciseMarketingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreciseMarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
