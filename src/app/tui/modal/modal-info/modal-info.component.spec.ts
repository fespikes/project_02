import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslatePipeStub } from '../../../mock';
import { ModalInfoComponent } from './modal-info.component';
import { TccModalRef, TCC_MODAL_DATA } from '..';

describe('ModalInfoComponent', () => {
  let component: ModalInfoComponent;
  let fixture: ComponentFixture<ModalInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ModalInfoComponent,
        TranslatePipeStub,
      ],
      providers: [
        TccModalRef,
        {
          provide: TCC_MODAL_DATA,
          useValue: {},
        },
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
