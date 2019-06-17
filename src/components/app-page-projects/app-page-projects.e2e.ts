import { newE2EPage } from '@stencil/core/testing';

describe('app-page-projects', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-page-projects></app-page-projects>');

    const element = await page.find('app-page-projects');
    expect(element).toHaveClass('hydrated');
  });

});
