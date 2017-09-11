import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs/Rx';

// import { TccApiService } from '../shared';

export const LANG_KEY = 'tcc_language';

export enum Language {
  zh_CN = 1,
  en_US,
}

@Injectable()
export class I18nLangService {
  private langId: Language;
  private currentLangSubject = new BehaviorSubject<string>(this.lang);
  current = this.currentLangSubject.asObservable().distinctUntilChanged();

  constructor(
    // private api: TccApiService,
  ) {}

  set lang(lang: string) {
    this.langId = Language[lang];
    window.localStorage.setItem(LANG_KEY, lang);
    this.currentLangSubject.next(lang);
  }

  get lang() {
    if (!this.langId) {
      this.initLangId();
    }
    return Language[this.langId];
  }

  initLangId() {
    const lang = window.localStorage.getItem(LANG_KEY) || navigator.language;
    this.langId = Language[lang] || 1;
  }

  switch(lang: string) {
    if (!Language[lang]) {
      return;
    }
/*    this.api.post('locale', { code: lang })
    .subscribe(() => {
      this.lang = lang;
    });*/
  }
}
