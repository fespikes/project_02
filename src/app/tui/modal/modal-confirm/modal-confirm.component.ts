import { Component, Inject } from '@angular/core';

import { TccModalRef } from '../modal-ref.service';
import { TCC_MODAL_DATA } from '../modal-token';

@Component({
  templateUrl: './modal-confirm.component.html',
  styleUrls: ['./modal-confirm.component.sass'],
})
export class ModalConfirmComponent {
  message: string;

  constructor(
    private modalRef: TccModalRef,
    @Inject(TCC_MODAL_DATA) data,
  ) {
    this.message = data.message;
  }

  confirm() {
    this.modalRef.close(true);
  }

  cancel() {
    this.modalRef.close(false);
  }

}
