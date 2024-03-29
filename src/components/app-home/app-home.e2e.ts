import { newE2EPage } from "@stencil/core/testing";

describe("app-home", () => {
  it("renders", async () => {
    const page = await newE2EPage();
    await page.setContent("<app-home></app-home>");

    const element = await page.find("app-home");
    expect(element).toHaveClass("hydrated");
  });

  it('contains a "Profile Page" button', async () => {
    const page = await newE2EPage();
    await page.setContent("<app-home></app-home>");

    const element = await page.find("app-home >>> p");
    expect(element.textContent).toEqual(
      `I'm a front-end developer based in Melbourne, Australia ✌️`
    );
  });
});
