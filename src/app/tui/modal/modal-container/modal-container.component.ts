import {
  ComponentRef,
  Component,
  ElementRef,
  HostBinding,
  OnInit,
  EventEmitter,
  ViewContainerRef,
  ViewChild,
  ChangeDetectorRef,
  AfterViewInit,
  ComponentFactoryResolver,
  ReflectiveInjector,
} from '@angular/core';
import cloneDeep from 'lodash/cloneDeep';

import { ModalCountService } from '../modal-count.service';
import { TccModalRef } from '../modal-ref.service';
import { TccModalConfig, ComponentType } from '../modal.model';
import { TCC_MODAL_DATA } from '../modal-token';

let modalId = 0;

const count = new ModalCountService();

@Component({
  templateUrl: './modal-container.component.html',
  providers: [
    TccModalRef,
  ],
})
export class ModalContainerComponent implements OnInit, AfterViewInit {
  @HostBinding('class.tcc-modal') hostClass = true;
  // 标题
  title: string;

  // 尺寸
  size: string;

  // 当前组件的实例，在关闭对话框时，需要手动销毁
  // componentRef: ComponentRef<ModalContainerComponent>;

  // 对话框内部挂载组件的容器
  @ViewChild('modalBody', {
    read: ViewContainerRef,
  }) modalBody: ViewContainerRef;

  // 对话框内部挂载的组件
  modalBodyComponent: ComponentType<any>;

  // 对话框内部挂载组件的配置信息
  config: TccModalConfig;

  // 当前对话框的id
  id = ++modalId;

  // 在对话框开启时，监听document keydown事件的回调
  documentEscapeListener = (function(event) {
    const {keyCode} = event;
    if (keyCode !== 27) {
      return;
    }
    if (this.count.last === this.id) {
      this.close(null);
    }
  }).bind(this);

  // 已打开对话框的计数器
  count = count;

  constructor(
    private element: ElementRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private changeDetectorRef: ChangeDetectorRef,
    public modalRef: TccModalRef,
  ) {}

  ngOnInit() {
    this.open();
    const clean = this.clean.bind(this);
    this.modalRef.afterClose
    .subscribe({ complete: clean });
  }

  ngAfterViewInit() {
    if (!this.modalBodyComponent) {
      return;
    }
    const {data = {}, title, size = 'md', injector: parentInjector} = this.config;

    // 处理注入依赖
    const injector = ReflectiveInjector.resolve([
      {
        provide: TCC_MODAL_DATA,
        useValue: cloneDeep(data),
      },
      {
        provide: TccModalRef,
        useValue: this.modalRef,
      },
    ]);
    const resolvedInjector = ReflectiveInjector.fromResolvedProviders(injector, parentInjector);

    // 生成内部组件实例
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.modalBodyComponent);
    const childView = this.modalBody.createComponent(componentFactory, undefined, resolvedInjector);

    this.changeDetectorRef.detach();
    this.title = title;
    this.size = size;
    this.changeDetectorRef.markForCheck();
    this.changeDetectorRef.detectChanges();
    this.changeDetectorRef.reattach();
  }

  open() {
    this.count.add(this.id);
    document.body.classList.add('tcc-modal-open');
    document.body.appendChild(this.element.nativeElement);
    document.addEventListener('keydown', this.documentEscapeListener);
  }

  clean() {
    this.count.remove();
    if (this.count.empty) {
      document.body.classList.remove('tcc-modal-open');
    }
    document.removeEventListener('keydown', this.documentEscapeListener);
  }

  // 通过点击背景或关闭按钮方式关闭对话框
  close() {
    this.modalRef.afterClose.complete();
  }

}
