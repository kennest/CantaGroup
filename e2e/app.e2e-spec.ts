import { CantaGroupPage } from './app.po';

describe('canta-group App', () => {
  let page: CantaGroupPage;

  beforeEach(() => {
    page = new CantaGroupPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
