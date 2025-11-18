import {test as baseTest, expect as baseExpect} from "../fixtures/fixtureBase";
import {MenuPage} from "../page/menuPage";
import PaymentDetails from "../component/paymentDetails";
import Header from "../component/header";
import { CartPage } from "../page/cartPage";

type MyFixturePage = {
    menuPage: MenuPage;
    paymentDetails: PaymentDetails;
    header: Header;
    cartPage: CartPage;
};

export const test = baseTest.extend<MyFixturePage>({
    menuPage: async ({page}, use) => {
        const menuPage = new MenuPage(page);
        await use(menuPage);
    },
    paymentDetails: async ({page}, use) => {
        const paymentDetails = new PaymentDetails(page);
        await use(paymentDetails);
    },
    header: async ({page}, use) => {
        const header = new Header(page);
        await use(header);
    },
    cartPage: async ({page}, use) => {
        const cartPage = new CartPage(page);
        await use(cartPage);
    }
});


export const expect = baseExpect;