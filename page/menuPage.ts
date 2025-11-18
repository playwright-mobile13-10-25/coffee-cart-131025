import { Locator, Page, expect, test } from "@playwright/test";
import { BasePage } from "./basePage";
import { CoffeeNames } from "../test.data/menuPage.testData.enum";

export class MenuPage extends BasePage {

  //#region  Elements

    private readonly TOTAL_BUTTON: Locator = this.page.locator("//button[@class='pay']");
    private readonly COFFEE_GRID: Locator = this.page.locator("//ul[li[h4]]");
    private readonly COFFEE_GRID_ITEMS: Locator = this.page.locator("//ul//li[h4]");
    private readonly CUPS_IMAGE: Locator = this.page.locator("//div[@class='cup']");
    private readonly COFFEE_NAME: Locator = this.page.locator("//ul//li/h4");
    private readonly PAY_BUTTON: Locator = this.page.locator('[data-test="checkout"]')

    private readonly COFFEE_ITEM = (item: string): Locator => this.page.locator(`//ul//li/h4[contains(.,"${item + ' $'}")]`);
    private readonly COFFEE_CUP_ITEM = (coffeeItem: CoffeeNames): Locator => this.page.getByLabel(coffeeItem, { exact: true });


  //#endregion


  //#region Constructor

    constructor(page: Page) {
      super(page);
    }

  //#endregion

  //#region Action steps

    async navigateToMenu() {
      await this.navigateTo("/");
    }
    async clickTotalButton() {
      await this.TOTAL_BUTTON.click();
    }

    async clickCoffeeItem(coffeeItem:CoffeeNames) {
      const stepName: string = `Click on the coffee item ${coffeeItem}`;
      await test.step(stepName, async () => {
        console.debug(stepName);
        await this.COFFEE_CUP_ITEM(coffeeItem).click();
     });
    }

  //#endregion

  //#region Verification steps

    async verifyPayButtonIsDisplayed(): Promise<void> {
    const stepName: string = `Verify pay button is displayed`;
    await test.step(stepName, async () => {
      console.debug(stepName);
      await expect(this.PAY_BUTTON, `Pay button should be visible`).toBeVisible();
   });
  }

  async verifyPageTitleIsDisplayed(expectedTitle: string): Promise<void> {
    const stepName: string = `Verify page title is displayed`;
    await test.step(stepName, async () => {
      console.debug(stepName);
      await expect(this.page, `Page title should have text ${expectedTitle}`).toHaveTitle(expectedTitle);
   });
  }

  async verifyCoffeeMenuGridIsDisplayed(): Promise<void> {
    const stepName: string = `Verify coffee menu grid is displayed`;
    await test.step(stepName, async () => {
      console.debug(stepName);
      await expect(this.COFFEE_GRID, `Coffee menu grid should be visible`).toBeVisible();
    });
  }

  async verifyCoffeeMenuGridItems(count: number): Promise<void> {
    const stepName: string = `Verify coffee menu grid items count is ${count}`;
    await test.step(stepName, async () => {
      console.debug(stepName);
      await expect(await this.COFFEE_GRID_ITEMS.count(), `Coffee menu grid items should be ${count}`).toBe(count);
    });
  }

  async verifyCoffeeCupsImagesAreVisible(): Promise<void> {
    const stepName: string = `Verify coffee cups images are displayed`;
    await test.step(stepName, async () => {
      console.debug(stepName);
      const cupsImageItems = await this.CUPS_IMAGE.all();
      cupsImageItems.forEach(async (cupImage, index) => {
        await expect(cupImage, `Cup image at index ${index} should be visible`).toBeVisible();
      });
    });
  }

  async verifyEachCoffeeItemShowCoffeeName(): Promise<void> {
    const stepName: string = `Verify each coffee item show coffee name`;
    await test.step(stepName, async () => {
      console.debug(stepName);
      const coffeeNameItems = await this.COFFEE_NAME.all();
      coffeeNameItems.forEach(async (coffeeNameItem, index) => {
        let coffeeNameText = await coffeeNameItem.textContent();
        coffeeNameText = await coffeeNameText!.split('\$')[0].trim();
        await expect(Object.values(CoffeeNames), `Coffee name ${coffeeNameText} at index ${index} shoud exist`).toContain(coffeeNameText);
      });
    });
  }

  async verifyEachCoffeeItemShowsPrice(): Promise<void> {
    const stepName: string = `Verify each coffee item show price`;
    await test.step(stepName, async () => {
      console.debug(stepName);
      const coffeeNameItems = await this.COFFEE_NAME.all();
      coffeeNameItems.forEach(async (coffee, index) => {
        const coffeeText = await coffee.textContent();
        await expect(coffeeText, `Coffee item ${coffeeText} at index ${index} should contain [$] sign`).toContain("$");
      });
    });
  }

    async verifyDisplayedCoffeePrice(item: CoffeeNames, price: string): Promise<void> {
    const stepName: string = `Verify displayed coffee ${item} price is \$ ${price}`;
    await test.step(stepName, async () => {
      console.debug(stepName);
      let coffee = await this.COFFEE_ITEM(item).textContent();
      coffee = coffee!.split('$')[1].trim();
      await expect(this.COFFEE_ITEM(item), `Coffee item ${item} text to be visible`).toBeVisible();
      await expect(coffee, `Coffee ${item} price should be ${price}`).toBe(price);
    });
  }

  //#endregion
}
