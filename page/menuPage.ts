import { Locator, Page } from "@playwright/test";
import { BasePage } from "./basePage";

export class MenuPage extends BasePage {
  private readonly totalBtn: Locator;
  constructor(page: Page) {
    super(page);
    this.totalBtn = page.locator("//button[@class='pay']");
  }

  async navigateToMenu() {
    await this.navigateTo("/");
  }
  async clickTotalButton() {
    await this.totalBtn.click();
  }
}
