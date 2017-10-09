import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataMartAdvantagesComponent } from './data-mart-advantages.component';

describe('DataMartAdvantagesComponent', () => {
  let component: DataMartAdvantagesComponent;
  let fixture: ComponentFixture<DataMartAdvantagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataMartAdvantagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataMartAdvantagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
