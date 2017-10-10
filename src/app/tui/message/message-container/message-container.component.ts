import {
  OnInit,
  Optional,
  Inject,
  Component,
  HostBinding,
  ElementRef,
} from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

import {
  MessageDataOptions,
  MessageDataFilled,
} from '../message.model';

import {
  MessageConfig,
} from '../message-config.model';

const MESSAGE_DEFAULT_CONFIG = {
  duration: 4000,
  animate: true,
  pauseOnHover: true,
  maxStack: 7,
};

@Component({
  templateUrl: './message-container.component.html',
  styleUrls: ['./message-container.component.sass'],
})
export class MessageContainerComponent implements OnInit {
  @HostBinding('class.tcc-message-container') host = true;

  messages: MessageDataFilled[] = [];
  config: MessageConfig;

  constructor(
    private element: ElementRef,
    private router: Router,
  ) {
    this.config = Object.assign({}, MESSAGE_DEFAULT_CONFIG) as MessageConfig;
  }

  ngOnInit() {
    // Remove all messages on route changing
    this.router.events
    .filter(event => event instanceof NavigationStart)
    .subscribe((event) => {
      this.removeMessageAll();
    });
  }

  // Create a new message
  createMessage(message: MessageDataFilled): void {
    if (this.messages.length >= this.config.maxStack) {
      this.messages.splice(0, 1);
    }
    message.options = this._mergeMessageOptions(message.options);
    this.messages.push(message);
  }

  // Remove a message by messageId
  removeMessage(messageId: string): void {
    this.messages.some((message, index) => {
      if (message.messageId === messageId) {
        this.messages.splice(index, 1);
        return true;
      }
    });
  }

  // Remove all messages
  removeMessageAll() {
    this.messages = [];
  }

  // Merge default options and cutom message options
  protected _mergeMessageOptions(options: MessageDataOptions): MessageDataOptions {
    const defaultOptions: MessageDataOptions = {
      duration: this.config.duration,
      animate: this.config.animate,
      pauseOnHover: this.config.pauseOnHover,
    };
    return Object.assign(defaultOptions, options);
  }
}
