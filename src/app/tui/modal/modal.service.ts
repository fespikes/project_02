import {
  Injectable,
  ComponentFactoryResolver,
  ApplicationRef,
  Injector,
  ComponentRef,
} from '@angular/core';
import { Router, Event, NavigationStart } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { ModalConfirmComponent } from './modal-confirm/modal-confirm.component';
import { ModalInfoComponent } from './modal-info/modal-info.component';
import { ModalContainerComponent } from './modal-container/modal-container.component';

import {
  ConfirmModalConfig,
  TccModalConfig,
  ComponentType,
  ResponseError,
} from './modal.model';

@Injectable()
export class TccModalService {
  apiError = this._apiError.bind(this);

  // 缓存已经打开的对话框的ref引用，对话框关闭后需要清理`cache`
  cache: {[modalId: number]: ModalContainerComponent} = {};

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector,
    private router: Router,
  ) {
    // 在路由开始变化时关闭当前所有对话框
    router.events.subscribe((event: Event) => {
      if (!(event instanceof NavigationStart)) {
        return;
      }
      this.closeAll();
    });
  }

  private addCache(modalContainerInstance: ModalContainerComponent) {
    const {id, modalRef} = modalContainerInstance;
    this.cache[id] = modalContainerInstance;
  }

  private removeCache(modalId: number) {
    delete this.cache[modalId];
  }

  // 关闭所有对话框
  closeAll() {
    Object.keys(this.cache).forEach((modalId) => {
      const modal: ModalContainerComponent = this.cache[modalId];
      modal.modalRef.close();
    });
  }

  open<T>(Component: ComponentType<T>, config: TccModalConfig = {}): Observable<any> {
    const modalContainerFactory = this.componentFactoryResolver.resolveComponentFactory(ModalContainerComponent);
    const modalContainerRef: ComponentRef<ModalContainerComponent> = modalContainerFactory.create(this.injector);
    const {instance: modalContainerInstance} = modalContainerRef;

    // 为modalContainer实例传入需要挂载的组件，以及组件的配置项
    modalContainerInstance.modalBodyComponent = Component;
    modalContainerInstance.config = config;

    // 在applicationRef上挂载TccModalContainer实例
    this.appRef.attachView(modalContainerRef.hostView);

    this.addCache(modalContainerInstance);

    const complete = () => {
      modalContainerRef.destroy();
      this.removeCache(modalContainerInstance.id);
    };

    // 在对话框关闭时，销毁TccModalContainer实例
    modalContainerInstance.modalRef.afterClose.subscribe({ complete });

    // 在实现了ControlValueAccessor接口的组件（即能使用ngModel指令的组件）上触发blur事件，
    // 会在同一轮循环内改变ngModel的值，从而抛出ExpressionChangedAfterItHasBeenCheckedError
    setTimeout(() => {
      (<HTMLElement>document.activeElement).blur();
    });

    return modalContainerInstance.modalRef.afterClose;
  }

  confirm(config: ConfirmModalConfig): Observable<boolean> {
    const {title, message} = config;
    return this.open(ModalConfirmComponent, {
      title,
      data: {message},
      size: 'sm',
    });
  }

  info(config: ConfirmModalConfig): Observable<any> {
    const {title, message} = config;
    return this.open(ModalInfoComponent, {
      title,
      data: {message},
      size: 'sm',
    });
  }

  private _apiError(error: ResponseError): Observable<any> {
    const message = error.message || 'TUI.MODAL.UNKNOWN_ERROR';
    return this.info({
      title: 'TUI.MODAL.ERROR',
      message,
    });
  }

}
