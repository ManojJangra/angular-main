import { AngularMainPage } from './app.po';

describe('angular-main App', () => {
  let page: AngularMainPage;

  beforeEach(() => {
    page = new AngularMainPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
