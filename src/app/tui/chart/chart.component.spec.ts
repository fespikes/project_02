import { EventEmitter } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslatePipeStub, TranslateServiceMock } from '../../mock';
import { TranslateService } from '../../i18n';
import { SubmenuService } from '../submenu';
import { ChartComponent } from './chart.component';

class SubmenuServiceStub {
  onToggle = new EventEmitter;
}

describe('ChartComponent', () => {
  let component: ChartComponent;
  let fixture: ComponentFixture<ChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ChartComponent,
        TranslatePipeStub,
      ],
      providers: [
        {
          provide: TranslateService,
          useClass: TranslateServiceMock,
        },
        {
          provide: SubmenuService,
          useClass: SubmenuServiceStub,
        },
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
