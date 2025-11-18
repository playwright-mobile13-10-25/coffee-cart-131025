import { test } from "../fixtures/fixturePage";
import { HeaderMenu, ItemURL, TableListCartHeader } from "../page.atoms/ui.menu.page.enum";
import { CoffeeGrid, CoffeeNames, CoffeePrice, PageAtom, TableItems } from "../test.data/menuPage.testData.enum";

test.describe("Coffee Page Tests", () => {
  test.beforeEach(async ({ page, baseURL }) => {
    // Setup code if needed
    await page.goto(baseURL!);
  });

  test("TC-001 - Verify Coffee Menu Display on Homepage", async ({ menuPage, header }) => {
    await menuPage.verifyPageTitleIsDisplayed(PageAtom.Title);
    await menuPage.verifyCoffeeMenuGridIsDisplayed();
    await menuPage.verifyCoffeeMenuGridItems(CoffeeGrid.Items);
    await menuPage.verifyCoffeeCupsImagesAreVisible();
    await menuPage.verifyEachCoffeeItemShowCoffeeName();
    await menuPage.verifyEachCoffeeItemShowsPrice();

    for (const key of Object.keys(HeaderMenu)) {
      const headerLink = HeaderMenu[key as keyof typeof HeaderMenu];
      await header.verifyHeaderLinksAreVisible(headerLink);
    }

    await menuPage.verifyPayButtonIsDisplayed();

    // Step 12: Verify responsive layout on different screen sizes
  });

  test("TC-002 - Verify Coffee Item Details and Pricing", async ({ menuPage }) => {
    for (const key of Object.keys(CoffeeNames)) {
      const coffeeName = CoffeeNames[key as keyof typeof CoffeeNames];
      const coffeePrice = CoffeePrice[key as keyof typeof CoffeePrice];
      await menuPage.verifyDisplayedCoffeePrice(coffeeName, coffeePrice);
    }
  });

  test("TC-003 - Verify Navigation to Cart Page", async ({ page, menuPage, header, cartPage }) => {
    await menuPage.clickCoffeeItem(CoffeeNames.Espresso);
    await header.verifyCartCount(1);
    await header.verifyHeaderLinksAreVisible(HeaderMenu.CartLink);
    await header.clickHeaderMenuLink(HeaderMenu.CartLink);
    await menuPage.verifyURLContains(ItemURL.CartPageURL);

    //step 7: Verify page title updates	N/A	Page shows cart-related title

    for (const key of Object.keys(TableListCartHeader)) {
      const headerName = TableListCartHeader[key as keyof typeof TableListCartHeader];
      await cartPage.verifyTableListHeaderDisplays(headerName);
    }

    for (const key of Object.keys(TableItems)) {
      const item = TableItems[key as keyof typeof TableItems];
      await cartPage.verifyTableListItemDisplayed(item);
    }

    await menuPage.verifyPayButtonIsDisplayed();
    await page.goBack();
    await menuPage.verifyCoffeeMenuGridIsDisplayed();
  });
});