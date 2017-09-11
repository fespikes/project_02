import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslatePipeStub } from '../../../mock';
import { ModalConfirmComponent } from './modal-confirm.component';
import { TccModalRef, TCC_MODAL_DATA } from '..';

describe('ModalConfirmComponent', () => {
  let component: ModalConfirmComponent;
  let fixture: ComponentFixture<ModalConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ModalConfirmComponent,
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
    fixture = TestBed.createComponent(ModalConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
