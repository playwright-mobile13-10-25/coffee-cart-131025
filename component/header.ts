import { Page, Locator, test, expect } from "@playwright/test";
import { BasePage } from "../page/basePage";
import { HeaderMenu } from "../page.atoms/ui.menu.page.enum";


export default class Header extends BasePage {

    //#region  Elements

    private readonly HEADER_LINK = (item: HeaderMenu): Locator => this.page.getByLabel(`${item}`);

    //#endregion

    //#region Constructor

    constructor(page: Page) {
        super(page);
    }

    //#endregion

    //#region Action steps

    async clickHeaderMenuLink(itemLink: HeaderMenu) {
        const stepName: string = `Click on the header item link ${itemLink}`;
        await test.step(stepName, async () => {
            console.debug(stepName);
            await this.HEADER_LINK(itemLink).click();
        });
    }

    //#endregion

    //#region Verification steps

    private getTextInRoundBrackets(inputString: string): string[] {
        const regex = /\((.*?)\)/g; // Matches text inside round brackets
        const matches: string[] = [];
        let match;
        while ((match = regex.exec(inputString)) !== null) {
            matches.push(match[1]);
        }
        return matches;
    }

    async verifyCartCount(expectedCount: number): Promise<void> {
        const stepName: string = `Verify cart count`;
        await test.step(stepName, async () => {
            console.debug(stepName);
            let cartLinkText = await this.HEADER_LINK(HeaderMenu.CartLink).textContent();
            const extractedText = await this.getTextInRoundBrackets(cartLinkText!);
            await expect(extractedText[0], `Cart count should be ${expectedCount}`).toBe(expectedCount.toString());
        });
    }

    async verifyHeaderLinksAreVisible(link: HeaderMenu): Promise<void> {
        const stepName: string = `Verify header link ${link} is visible`;
        await test.step(stepName, async () => {
            console.debug(stepName);
            await expect(this.HEADER_LINK(link), `Header link ${link} should be visible`).toBeVisible();
        });
    }

    //#endregion

}