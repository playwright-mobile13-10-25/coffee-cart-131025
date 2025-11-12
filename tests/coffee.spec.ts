import { test, expect } from "../fixtures/fixturePage";

test.describe("Coffee Page Tests", () => {
  test.beforeEach(async ({ page, baseURL }) => {
    // Setup code if needed
    await page.goto(baseURL);
  });

  test("has title coffee", async ({ page, baseURL }) => {
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Coffee cart/);
  });

  test("navigate to menu and click total", async ({ menuPage, paymentDetails }) => {
    await menuPage.navigateToMenu();
    await menuPage.clickTotalButton();
    await paymentDetails.enterName("John Doe");
    await paymentDetails.enterEmail("john.doe@example.com");

    await expect(paymentDetails.nameInput).toHaveValue("John Doe");
    await expect(paymentDetails.emailInput).toHaveValue("john.doe@example.com");
  });
});
