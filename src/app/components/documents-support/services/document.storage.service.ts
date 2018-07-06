import { Injectable } from '@angular/core';

@Injectable()
export class DocumentStorageService {

  docSubType = '';

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

  getDocSubType(): string {
    return sessionStorage.getItem('tdcweb:docType');
  }

  setDocSubType(docType: string) {
    sessionStorage.setItem('tdcweb:docType', docType);
  }
}
