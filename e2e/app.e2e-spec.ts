import { TestTodoPage } from './app.po';

describe('test-todo App', function() {
  let page: TestTodoPage;

  beforeEach(() => {
    page = new TestTodoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
