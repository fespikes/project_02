import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TdhDevKitsComponent } from './tdh-dev-kits.component';

describe('TdhDevKitsComponent', () => {
  let component: TdhDevKitsComponent;
  let fixture: ComponentFixture<TdhDevKitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TdhDevKitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TdhDevKitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
