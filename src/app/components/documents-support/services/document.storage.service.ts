import { Injectable } from '@angular/core';

@Injectable()
export class DocumentStorageService {

  constructor() {

  }

  getStorageItem(key): string {
    return sessionStorage.getItem(key);
  }

  setStorageItem(key, value): void {
    sessionStorage.setItem(key, value);
  }

  clearStorage(): void {
    sessionStorage.clear();
  }
}
