import { Locator, Page, test, expect } from "@playwright/test";

export abstract class BasePage {
  readonly page: Page;
  readonly title: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = page.locator("title");
  }

  async navigateTo(url: string): Promise<void> {
    await this.page.goto(url);
  }

  async sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async verifyURLContains(expectedURL: string): Promise<void> {
    const stepName: string = `Verify URL contains ${expectedURL}`;
    await test.step(stepName, async () => {
        console.debug(stepName);
        await expect(await this.page, `Page URL should contain`).toHaveURL(expectedURL);
   });
  }
}
