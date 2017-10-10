import { Component, OnInit } from '@angular/core';

import { MessageService } from '../../tui';

@Component({
  selector: 'tcc-ga-message',
  templateUrl: './ga-message.component.html',
  styleUrls: ['./ga-message.component.sass'],
})
export class GaMessageComponent implements OnInit {

  constructor(
    private message: MessageService,
  ) { }

  ngOnInit() {
  }

  openInfoMessage() {
    this.message.info('这是一个普通消息');
  }

  openSuccessMessage() {
    this.message.success('这是一个成功提示');
  }

  openWarningMessage() {
    this.message.warning('这是一个警告提示');
  }

  openErrorMessage() {
    this.message.error('这是一个错误提示');
  }

  openLoadingMessage() {
    this.message.loading('加载中');
  }

  openHtmlMessage() {
    this.message.html('<h3>任意内容</h3>');
  }

}
