import { UsersAppPage } from './app.po';

describe('users-app App', () => {
  let page: UsersAppPage;

  beforeEach(() => {
    page = new UsersAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
