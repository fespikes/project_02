import { TdcwebPage } from './app.po';

describe('tdcweb App', () => {
  let page: TdcwebPage;

  beforeEach(() => {
    page = new TdcwebPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to tdc!!');
  });
});
