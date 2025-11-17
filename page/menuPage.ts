import { Locator, Page } from '@playwright/test';
import { BasePage } from './basePage';
import { Coffee } from './emun/coffee.enum';

export class MenuPage extends BasePage {
  private readonly totalBtn: Locator;

  constructor(page: Page) {
    super(page);
    this.totalBtn = page.locator("//button[@class='pay']");
  }

  async navigateToMenu() {
    await this.navigateTo('/');
  }

  public async addToCard(coffee: { coffeName: Coffee; amount: number }) {
    for (let i = 0; i < coffee.amount; i++) {
      console.log(`Coffee: ${coffee.coffeName}`);
      await this.page.locator(`[aria-label='${coffee.coffeName}']`).click();
      await this.page.waitForLoadState('domcontentloaded');
    }
  }

  async clickTotalButton() {
    await this.totalBtn.click();
  }

  async getTotalButtonText(): Promise<string> {
    return this.totalBtn.innerText();
  }
}
