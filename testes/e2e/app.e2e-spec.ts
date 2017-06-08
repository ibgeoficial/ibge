import { TestesPage } from './app.po';

describe('testes App', () => {
  let page: TestesPage;

  beforeEach(() => {
    page = new TestesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
