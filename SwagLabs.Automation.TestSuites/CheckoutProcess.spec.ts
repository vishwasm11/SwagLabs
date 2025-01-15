import {test, Page, chromium, Browser} from "playwright/test";

import {BooleanPageExtensions} from '../SwagLabs.Automation.Extensions/BooleanPageExtenstions';
import {ClickPageExtensions} from '../SwagLabs.Automation.Extensions/ClickPageExtensions';
import {ExpectPageExtensions} from '../SwagLabs.Automation.Extensions/ExpectPageExtensions';
import {GetPageExtensions} from '../SwagLabs.Automation.Extensions/GetPageExtenstions';
import {SetPageExtenstions} from '../SwagLabs.Automation.Extensions/SetPageExtenstions';
import {WaitPageExtensions} from '../SwagLabs.Automation.Extensions/WaitPageExtensions';
import {VerifyUrlExtensions} from '../SwagLabs.Automation.Extensions/VerifyUrlExtensions';

import {CartPageConstants} from '../SwagLabs.Automation.Constants/CartPageConstants';
import {ConfirmationPageConstants} from '../SwagLabs.Automation.Constants/ConfirmationPageConstants';
import {InformationPageConstants} from '../SwagLabs.Automation.Constants/InformationPageConstants';
import {LoginPageConstants} from '../SwagLabs.Automation.Constants/LoginPageConstants';
import {OverviewPageConstants} from '../SwagLabs.Automation.Constants/OverviewPageConstants';
import {ProductsPageConstants} from '../SwagLabs.Automation.Constants/ProductsPageConstants';


test.describe('Product Checkout Process [E2E]', async()=>{

    var browser : Browser;
    var page : Page;
    var setPageExtenstions;
    var clickPageExtensions;
    var verifyUrlExtensions;

    // var browser await page.locator('//d').innerText()

    // 1. Login
    // 2. Select the product from products page [Verify the current url]
    // 3. CLick on cart icon [Navigate to cart page]
    // 4. Click on checkout button
    // 5. Entering the details
    // 6. Retrive the order id, Order price
    // 7. Click on the checkout button
    // 8. Verigy the final page [Text & Image]

    test.beforeAll('Setup Environment', async()=>{
        // Browser creation
        browser = await chromium.launch({slowMo: 2000});

        // Page creation with in the browser
        page = await browser.newPage();

        // Objects for extensions
        setPageExtenstions = new SetPageExtenstions(page);
        clickPageExtensions = new ClickPageExtensions(page);
        verifyUrlExtensions = new VerifyUrlExtensions(page);

    });

    test.afterAll('Teardown Environment', async()=>{
        await page.close();
        // Browser close
        await browser.close();

    });

    test.beforeEach('Setup Login Page', async()=>{
        // Page creation with in the browser
        // var Page = await browser.newPage();

        await page.goto('https://www.saucedemo.com/v1/');

        // await page.getByPlaceholder('username').fill('standard_user');
        await setPageExtenstions.SetTextBoxValueByPlaceholder(LoginPageConstants.userNameTextboxPlaceholderText, LoginPageConstants.userName);
        await setPageExtenstions.SetTextBoxValueByPlaceholder(LoginPageConstants.passwordTextboxPlaceholderText, LoginPageConstants.userPassword);

        // await  page.locator("#login-button").click();
        await clickPageExtensions.ClickButtonByLocatorAsync(LoginPageConstants.loginButtonId);

    });

    test.afterEach('Close Login Page', async()=>{
        
        //Logout
        // await page.close();
        
    });

    // test('Check out Process E2E Test', async()=>{

    //     console.log('All Good: Framework is up & running');

    // });

    test('Verify Home Page URL', async()=>{

        var currentPageUrl = await verifyUrlExtensions.VerifyPageUrl();  
        if(currentPageUrl == ProductsPageConstants.productsPageUrl){
            console.log("Products Page Url is Matched");
        }
    });
    
    test('Verify Home Page Title', async()=>{
        var currentPageTitle = await page.title();
        if(currentPageTitle == ProductsPageConstants.productPageTitle){
            console.log("Products Page Title is Matched");
        }
    });

});

