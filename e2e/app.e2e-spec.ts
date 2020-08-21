import { AngulardemodeployPage } from './app.po';

describe('angulardemodeploy App', function() {
  let page: AngulardemodeployPage;

  beforeEach(() => {
    page = new AngulardemodeployPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
