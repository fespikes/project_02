import { EventEmitter } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslatePipeStub } from '../../mock';
import { SubmenuService } from '../submenu';

import { CarouselComponent } from './carousel.component';

class SubmenuServiceStub {
  onToggle = new EventEmitter;
}

describe('CarouselComponent', () => {
  let component: CarouselComponent;
  let fixture: ComponentFixture<CarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CarouselComponent,
        TranslatePipeStub,
      ],
      providers: [
        {
          provide: SubmenuService,
          useClass: SubmenuServiceStub,
        },
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
