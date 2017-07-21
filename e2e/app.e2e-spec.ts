import { ServicesAppPage } from './app.po';

describe('services-app App', () => {
  let page: ServicesAppPage;

  beforeEach(() => {
    page = new ServicesAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
