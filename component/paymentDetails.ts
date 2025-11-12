import { Page, Locator } from "@playwright/test";


export default class PaymentDetails {
    page: Page;
    nameInput: Locator;
    emailInput: Locator;

    constructor(page: Page) {
        this.page = page;
        this.nameInput = page.locator("#name");
        this.emailInput = page.locator("#email");
    }
    async enterName(name: string): Promise<void> {
        await this.nameInput.fill(name);
    }

    async enterEmail(email: string): Promise<void> {
        await this.emailInput.pressSequentially(email, { delay: 100 });
    }

}