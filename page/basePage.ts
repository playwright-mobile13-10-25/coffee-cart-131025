import { Locator, Page } from '@playwright/test';

export enum PageTab {
  MENU,
  CART
}

export abstract class BasePage {
  readonly page: Page;
  readonly title: Locator;
  readonly menuLink: Locator;
  readonly cartLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = page.locator('title');
    this.menuLink = page.locator('a[href="/"]');
    this.cartLink = page.locator('a[href="/cart"]');
  }

  async navigateTo(url: string): Promise<void> {
    await this.page.goto(url);
  }

  public async selectTab(tab: PageTab) {
    switch (tab) {
      case PageTab.MENU: {
        await this.menuLink.click();
        await this.page.waitForLoadState('domcontentloaded');
        break;
      }
      case PageTab.CART: {
        await this.cartLink.click();
        await this.page.waitForLoadState('domcontentloaded');
        break;
      }
      default: {
        throw Error('Not implemented');
      }
    }
  }

  public async getElementColor(element: Locator) {
    return element.evaluate((element) => getComputedStyle(element).color);
  }

  async sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
