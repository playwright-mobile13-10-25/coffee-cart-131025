import { test as baseTest, expect as baseExpect } from '../fixtures/fixtureBase';
import { MenuPage } from '../page/menuPage';
import PaymentDetails from '../component/paymentDetails';
import { CartPage } from '../page/cartPage';

type MyFixturePage = {
  menuPage: MenuPage;
  cartPage: CartPage;
  paymentDetails: PaymentDetails;
};

export const test = baseTest.extend<MyFixturePage>({
  page: async ({ page }, use) => {
    await page.goto('/');
    use(page);
  },

  menuPage: async ({ page }, use) => {
    const menuPage = new MenuPage(page);
    await use(menuPage);
  },

  cartPage: async ({ page }, use) => {
    const cartPage = new CartPage(page);
    await use(cartPage);
  },

  paymentDetails: async ({ page }, use) => {
    const paymentDetails = new PaymentDetails(page);
    await use(paymentDetails);
  }
});

export const expect = baseExpect;
