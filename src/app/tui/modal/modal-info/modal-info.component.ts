import { Component, Inject } from '@angular/core';

import { TCC_MODAL_DATA } from '../modal-token';

import { TccModalRef } from '../modal-ref.service';

@Component({
  templateUrl: './modal-info.component.html',
  styleUrls: ['./modal-info.component.sass'],
})
export class ModalInfoComponent {
  message: string;

  constructor(
    private modalRef: TccModalRef,
    @Inject(TCC_MODAL_DATA) data,
  ) {
    this.message = data.message;
  }

}
