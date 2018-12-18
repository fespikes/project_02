import { Injectable } from '@angular/core';
import {
  Overlay,
  OverlayRef,
  OverlayConfig,
} from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';

import {
  MessageData,
  MessageDataFilled,
  MessageDataOptions,
} from './message.model';
import { MessageConfig } from './message-config.model';
import { MessageContainerComponent } from './message-container/message-container.component';

@Injectable()
export class MessageService {

  private _idPrefix = 'message-';
  private _counter = 0; // Id counter for messages
  private _container: MessageContainerComponent;
  private _popupRef: OverlayRef;

  constructor(
    private overlay: Overlay,
  ) {}

  private createConatiner() {
    if (!this._popupRef) {
      const overlayConfig = new OverlayConfig();
      this._popupRef = this.overlay.create(overlayConfig);
    }

    const messageContainerPortal = new ComponentPortal(MessageContainerComponent);
    const messageContainerRef = this._popupRef.attach(messageContainerPortal);

    return messageContainerRef.instance;
  }

  private remove(messageId?: string): void {
    if (messageId) {
      this._container.removeMessage(messageId);
    } else {
      this._container.removeMessageAll();
    }
  }

  private createMessage(message: MessageData, options?: MessageDataOptions): MessageDataFilled {
    if (!this._container) {
      this._container = this.createConatiner();
    }

    const resultMessage: MessageDataFilled = Object.assign(message, {
      messageId: this._generateMessageId(),
      options: options,
      createdAt: new Date(),
    });
    this._container.createMessage(resultMessage);

    return resultMessage;
  }

  private _generateMessageId(): string {
    return this._idPrefix + this._counter++;
  }

  success(content: string, options?: MessageDataOptions) {
    return this.createMessage({ type: 'success', content: content }, options);
  }

  error(content: string, options?: MessageDataOptions) {
    return this.createMessage({ type: 'error', content: content }, options);
  }

  info(content: string, options?: MessageDataOptions) {
    return this.createMessage({ type: 'info', content: content }, options);
  }

  warning(content: string, options?: MessageDataOptions) {
    return this.createMessage({ type: 'warning', content: content }, options);
  }

  loading(content: string, options?: MessageDataOptions) {
    return this.createMessage({ type: 'loading', content: content }, options);
  }

  create(type: string, content: string, options?: MessageDataOptions) {
    return this.createMessage({ type: type as any, content: content }, options);
  }

  // For content with html
  html(html: string, options?: MessageDataOptions) {
    return this.createMessage({ html: html }, options);
  }

}
