import { newE2EPage } from '@stencil/core/testing';

describe('app-background', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-background></app-background>');

    const element = await page.find('app-background');
    expect(element).toHaveClass('hydrated');
  });
});
