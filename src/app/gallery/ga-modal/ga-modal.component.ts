import { Component, Injector, Inject, Injectable } from '@angular/core';

import { TccModalService, TccModalRef, TCC_MODAL_DATA } from '../../tui';
import { TdcApiService } from '../../shared';

@Component({
  template: '<div>Hello world</div>',
})
export class GaModalHelloComponent {}

@Component({
  template: `
  <div [style.height]="'100rem'">This is scrollable modal</div>
  `,
})
export class GaModalScrollableComponent {}

@Component({
  template: `
  <input type="text" [(ngModel)]="word" [style.margin-bottom]="'1rem'">
  <button tccBtn="primary" (click)="submit()" [disabled]="!word">submit</button>
  `,
})
export class GaModalWithCloseCallbackComponent {
  word: string;

  constructor(
    private modal: TccModalRef,
  ) {}

  submit() {
    this.modal.close(this.word);
  }
}

@Component({
  template: `
  <ul *ngFor="let book of books">
    <li>{{book}}</li>
  </ul>
  `,
})
export class GaModalWithDataComponent {
  books: string[];

  constructor(
    @Inject(TCC_MODAL_DATA) data,
  ) {
    this.books = data.books;
  }
}

@Injectable()
export class CounterService {
  private _value = 0;

  get value() {
    return this._value;
  }

  add() {
    this._value++;
  }
}

@Component({
  template: `
  <div>{{counter.value}}</div>
  <button tccBtn="primary" (click)="counter.add()">add</button>
  `,
})
export class GaModalWithInjectorComponent {
  constructor(
    public counter: CounterService,
  ) {}
}

@Component({
  template: '<button tccBtn="primary" (click)="openChildModal()">Child Modal</button>',
})
export class GaModalMultipleComponent {
  constructor(
    private modal: TccModalService,
  ) {}

  openChildModal() {
    this.modal.info({
      title: 'hello',
      message: 'world',
    });
  }

}

@Component({
  selector: 'tcc-ga-modal',
  templateUrl: './ga-modal.component.html',
  styleUrls: ['./ga-modal.component.sass'],
  providers: [
    CounterService,
  ],
})
export class GaModalComponent {
  constructor(
    private modal: TccModalService,
    private injector: Injector,
    private api: TdcApiService,
  ) { }

  openHelloModal(size: string) {
    return this.modal.open(GaModalHelloComponent, {
      title: 'Hello',
      size,
    });
  }

  openSmModal() {
    this.openHelloModal('sm');
  }

  openMdModal() {
    this.openHelloModal('md');
  }

  openLgModal() {
    this.openHelloModal('lg');
  }

  openConfirmModal() {
    this.modal.confirm({
      title: 'hello',
      message: 'world',
    })
    .subscribe((confirmed: boolean) => {
      console.log(`confirmed: ${confirmed}`);
    });
  }

  openInfoModal() {
    this.modal.info({
      title: 'Info Modal',
      message: 'This is info modal',
    })
    .subscribe(() => {
      console.log('info modal is closed');
    });
  }

  openScrollableModal() {
    this.modal.open(GaModalScrollableComponent, {
      title: 'Scrollable',
    });
  }

  openChildModal() {
    this.modal.confirm({
      title: 'Child Modal',
      message: 'This is child modal. And press escape to close it.',
    });
  }

  openModalWithCloseCallback() {
    this.modal.open(GaModalWithCloseCallbackComponent, {
      title: 'Modal With Close Callback',
    })
    .subscribe((word: string) => {
      console.log(`Your word is: ${word}`);
    });
  }

  openModalWithData() {
    this.modal.open(GaModalWithDataComponent, {
      title: 'Modal With Data',
      data: {
        books: ['hello', 'world', 'angular2'],
      },
    });
  }

  openModalWithInjector() {
    this.modal.open(GaModalWithInjectorComponent, {
      title: 'Modal With Injector',
      injector: this.injector,
    });
  }

  openMultipleModal() {
    this.modal.open(GaModalMultipleComponent, {
      title: 'Multiple Modal',
      injector: this.injector,
    });
  }

  openApiErrorModal() {
    this.api.get('wrong')
    .subscribe(undefined, this.modal.apiError);
  }
}
