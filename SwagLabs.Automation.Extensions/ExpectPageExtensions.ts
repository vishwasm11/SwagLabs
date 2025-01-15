import { Page, expect } from "playwright/test";

export class ExpectPageExtensions{

    private page: Page

    constructor(page){
        this.page = page;
    }

   async ExpectPageToHaveTitle(pageTitle){
        expect(this.page).toHaveTitle(pageTitle);
   }

   async ExpectPageToHaveUrl(pageUrl){
    expect(this.page).toHaveTitle(pageUrl);
   }
}