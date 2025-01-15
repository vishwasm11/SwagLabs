import { Locator, Page } from "playwright";

export class VerifyUrlExtensions{

    private page: Page

    constructor(page){
        this.page = page;
    }

    async VerifyPageUrl(actualUrl){
        var retrivedUrl = this.page.url();
        return retrivedUrl;
    } 

}