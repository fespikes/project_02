import { browser, by, element } from 'protractor';

export class TdcwebPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('tdc-root h1')).getText();
  }
}
