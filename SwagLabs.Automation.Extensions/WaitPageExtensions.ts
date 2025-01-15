import { Page } from "playwright";

export class WaitPageExtensions{

    private page: Page
    constructor(page){
        this.page = page;
    }

    async WaitForDomContentsToBeLoaded(){
        await this.page.waitForLoadState('domcontentloaded');
    }

    async WaitForPageContentsToBeLoaded(){
        await this.page.waitForLoadState('load');
    }

    async waitForSelectorToBeVisible(locator){
        await this.page.waitForSelector('Selector', {state: 'visible'}); //timeout is optional
    }

    async waitForSelectorToBeAttached(locator){
        await this.page.waitForSelector('Selector', {state: 'attached'}); //timeout is optional
    }
}