import {test as baseTest, expect as baseExpect} from "../fixtures/fixtureBase";
import {MenuPage} from "../page/menuPage";
import PaymentDetails from "../component/paymentDetails";

type MyFixturePage = {
    menuPage: MenuPage;
    paymentDetails: PaymentDetails;
};

export const test = baseTest.extend<MyFixturePage>({
    menuPage: async ({page}, use) => {
        const menuPage = new MenuPage(page);
        await use(menuPage);
    },
    paymentDetails: async ({page}, use) => {
        const paymentDetails = new PaymentDetails(page);
        await use(paymentDetails);
    }
});


export const expect = baseExpect;