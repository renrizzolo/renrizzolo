import { newE2EPage } from '@stencil/core/testing';

describe('app-page-project', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-page-project></app-page-project>');

    const element = await page.find('app-page-project');
    expect(element).toHaveClass('hydrated');
  });
});
