import { Page } from "playwright";

export class GetPageExtensions{

    private page: Page
    
    constructor(page){
        this.page = page
    }

//Get Input value by Textbox Placeholder
    async GetInputValueByPlaceholder(placeholderName){
        return await this.page.getByPlaceholder(placeholderName).inputValue();
    }

//Get Inner Text of UI Element [Id, Class, Css Selector, Xpath]
    async GetInnerTextByLocator(locator){
        return await this.page.locator(locator).innerText();
    }

    async GetInnerAllTextByLocator(locator){
        return await this.page.locator(locator).allInnerTexts();
    }

// Get Alert Message

async GetAlertPromptText(promptText: string){

    var _promptMessage;
    
    this.page.on('dialog', dialog =>{
        _promptMessage = dialog.message();
    });
    return _promptMessage;
}

}

