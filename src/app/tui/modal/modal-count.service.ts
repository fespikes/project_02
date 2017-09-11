/**
 * 记录当前打开对话框的id
 *
 * 使用场景如下
 *
 * 1. 在打开对话框时，需要设置body的overflow属性为hidden，避免同时出现两个滚动条
 * 同时，在关闭对话框时，重置body的overflow属性
 *
 * 2. 在打开多个对话框的情况下，按escape键，只关闭最上层的对话框
 */
import { Injectable } from '@angular/core';

@Injectable()
export class ModalCountService {
  private count = 0;
  private store: number[] = [];

  get empty(): boolean {
    return this.store.length === 0;
  }

  get last() {
    if (this.empty) {
      return null;
    }
    return this.store[this.store.length - 1];
  }

  add(id: number) {
    this.store.push(id);
  }

  remove() {
    if (this.empty) {
      return;
    }
    this.store.pop();
  }

}
