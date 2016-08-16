import { TestCliSourceMapPage } from './app.po';

describe('test-cli-source-map App', function() {
  let page: TestCliSourceMapPage;

  beforeEach(() => {
    page = new TestCliSourceMapPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
