import { Locator, Page } from '@playwright/test';
import { BasePage } from './basePage';

export class CartPage extends BasePage {
  private readonly items: Locator;
  private readonly totalButton: Locator;

  constructor(page: Page) {
    super(page);
    this.items = this.page.locator("//div[@class='list']/div/ul[1]/li[@class='list-item']");
    this.totalButton = this.page.locator('button[data-test="checkout"]');
  }

  async navigateToMenu() {
    await this.navigateTo('/cart');
  }

  public async isItemAvailable(coffeeName: string): Promise<boolean> {
    return this.items.getByText(coffeeName, { exact: false }).isVisible();
  }

  public getRowItemXicon(coffeeName: string): Locator {
    return this.getRowLocator(coffeeName).locator('.delete');
  }

  public async getItemsCount(): Promise<number> {
    return (await this.items.all()).length;
  }

  public async getItemsName(): Promise<string[]> {
    return this.items.allInnerTexts();
  }

  public async getTotalText(): Promise<string> {
    return this.totalButton.innerText();
  }

  private getRowLocator(coffeeName: string) {
    return this.page.locator(`//div[@class='list']/div/ul[1]/li[@class='list-item']/div[text()='${coffeeName}']/..`);
  }
}
