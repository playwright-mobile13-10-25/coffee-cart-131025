import { Locators, Page } from "@playwright/test";

export abstract class BasePage {
  readonly page: Page;
  readonly title: Locators;

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
}
