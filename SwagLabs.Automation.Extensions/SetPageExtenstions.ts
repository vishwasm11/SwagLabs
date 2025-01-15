import { Page } from "playwright";

export class SetPageExtenstions{
    
    private page: Page

    constructor(page: Page)
    {
        this.page = page;
    }
    
//Set Textbox value by Placeholder
    async SetTextBoxValueByPlaceholder(placeholderName, inputValue)
    {
        await this.page.getByPlaceholder(placeholderName).fill(inputValue);   // await page.getByPlaceholder('enter username').fill('Vishwas M')
    }

//Set Textbox value by Role
    async SetTextBoxValueByRole(placeholderName: any, inputValue: any)
    {
        await this.page.getByRole('textbox', {name: placeholderName}).fill(inputValue);
    }

//Set Textbox value by Locator [Id, Class, XPath, Css Selector] 

    async SetTextBoxValueByLocator(textboxLocator: any, inputValue: any)
    {
        await this.page.locator(textboxLocator).fill(inputValue);
    }

   
// Clear TextBox value
    async ClearTextBoxValueByRole(placeholderName: any){
        await this.page.getByRole('textbox', {name: placeholderName}).clear();
    }

    async ClearTextBoxValueByPlaceholder(placeholderName: any)
    {
        await this.page.getByPlaceholder(placeholderName).clear();
    }

// Set Dropdown value by Value

    async SetDropdownValueByIndex(dropdownLocator: any, index: any){
        await this.page.selectOption(dropdownLocator, {index: index});
    }

    async SetDropdownValueByValue(dropdownLocator: any, value: any){
        await this.page.selectOption(dropdownLocator, {value: value});
    }

    async SetDropdownValueByLabel(dropdownLocator: any, label: any){
        await this.page.selectOption(dropdownLocator, {label: label});
    }

    // async SetDropdownValueByMultipleLabel(dropdownLocator: any, label: { [x: string]: any; }[]){
    //     await this.page.selectOption(dropdownLocator, [label] );
    // }

// Set Check box value by Role

    async SetCheckboxValueByLabelOrAriaLabelName(labelOrAriaLabelName){
        await this.page.getByRole('checkbox', {name: labelOrAriaLabelName}).check() // aria label or accessible name
    }

    async SetCheckboxValueUnCheckByLabelOrAriaLabelName(labelOrAriaLabelName){
        await this.page.getByRole('checkbox', {name: labelOrAriaLabelName}).uncheck() // aria label or accessible name
    }

// Set Check box value by Loccator [Id, Class, Css Selector, XPath]

    async SetCheckboxValueByLocator(checkboxLocator){
        await this.page.locator(checkboxLocator).check() // aria label or accessible name
    }

    async SetCheckboxValueUnCheckByLocator(checkboxLocator){
        await this.page.locator(checkboxLocator).uncheck() // aria label or accessible name
    }

// Set Radio button

    async SetRadioButtonValueByLabelOrAriaLabelName(labelOrAriaLabelName){
        await this.page.getByRole('checkbox', {name: labelOrAriaLabelName}).click() // aria label or accessible name
    }

    async SetRadioButtonValueUnClickkByLabelOrAriaLabelName(labelOrAriaLabelName){
        await this.page.getByRole('checkbox', {name: labelOrAriaLabelName}).click() // aria label or accessible name
    }

// Set Radio button value by Loccator [Id, Class, Css Selector, XPath]

    async SetRadioButtonValueByLocator(checkboxLocator){
        await this.page.locator(checkboxLocator).click() // aria label or accessible name
    }

    async SetRadioButtonValueUnclickByLocator(checkboxLocator){
        await this.page.locator(checkboxLocator).click() // aria label or accessible name
    }


// Alert

    async SetAlertAccept(){

        this.page.on('dialog', dialog =>{
            dialog.accept();
        });
    }

    async SetAlertDismiss(){

        this.page.on('dialog', dialog =>{
            dialog.dismiss();

        });
    }

    async SetAlertPromptByTextAndAccept(promptText){

        this.page.on('dialog', dialog =>{
            dialog.accept(promptText);
        });
    }

    async SetAlertAcceptAndGetMessage(promptText){

        this.page.on('dialog', dialog =>{
            var _promptMessage = dialog.message();
            dialog.accept(promptText);
            return _promptMessage;
        });
    }

}
