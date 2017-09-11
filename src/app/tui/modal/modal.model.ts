import { Injector } from '@angular/core';

export interface ConfirmModalConfig {
  title: string;
  message: string;
}

export interface TccModalConfig {
  data?: any;
  title?: string;
  size?: string;
  injector?: Injector;
}

export interface ComponentType<T> {
  new (...args: any[]): T;
}

export interface ResponseError {
  message?: string;
}
