import { Locator, Page, expect, test } from "@playwright/test";
import { BasePage } from "./basePage";

export class CartPage extends BasePage {

  //#region  Elements

    private readonly TABLE_LIST_HEADER: Locator = this.page.locator("//li[@class='list-header']/div");
    private readonly TABLE_LIST_ITEMS: Locator = this.page.locator("//li[@class='list-item']/div");

  //#endregion


  //#region Constructor

    constructor(page: Page) {
      super(page);
    }

  //#endregion

  //#region Action steps


  //#endregion

  //#region Verification steps

  async verifyTableListHeaderDisplays(expectedTitle: string): Promise<void> {
    const stepName: string = `Verify Table List Header Displays item ${expectedTitle}`;
    await test.step(stepName, async () => {
      console.debug(stepName);
      const listHeaderItems = await this.TABLE_LIST_HEADER.all();

      let listHeaderItemsText: Array<string> = [];
      for (const item of listHeaderItems) {
        const itemText = (await item.textContent())?.trim() || "";
        listHeaderItemsText.push(itemText);
      }

      await expect(listHeaderItemsText, `List of table headers contains item ${expectedTitle}`).toContain(expectedTitle);
   });
  }

    async verifyTableListItemDisplayed(expectedItem: string): Promise<void> {
    const stepName: string = `Verify Table List Item Displayed item ${expectedItem}`;
    await test.step(stepName, async () => {
      console.debug(stepName);
      const listItems = await this.TABLE_LIST_ITEMS.all();

      let listItemsText: Array<string> = [];
      for (const item of listItems) {
        const itemText = (await item.textContent())?.replace(/^(-+)|(-+)|(\++)|(\++)$/g, "").trim() || "";
        listItemsText.push(itemText);
      }

      await expect(listItemsText, `List of table items contains item ${expectedItem}`).toContain(expectedItem);
   });
  }

  //#endregion
}
