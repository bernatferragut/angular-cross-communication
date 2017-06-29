import { NgCommPage } from './app.po';

describe('ng-comm App', () => {
  let page: NgCommPage;

  beforeEach(() => {
    page = new NgCommPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
