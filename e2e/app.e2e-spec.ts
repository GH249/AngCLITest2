import { AngCLITest2Page } from './app.po';

describe('ang-clitest2 App', function() {
  let page: AngCLITest2Page;

  beforeEach(() => {
    page = new AngCLITest2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
