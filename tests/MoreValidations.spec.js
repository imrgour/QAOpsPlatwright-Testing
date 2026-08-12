//MoreValidations.spec.js
const {test,expect} = require('@playwright/test');
const path = require('node:path');


//test.describe.configure({mode : 'parallel'})
test('PopupValidations', async ({page})=> 
{

    
    await page.goto("https://rahulshettyacademy.com/automationPractice/");

    
    page.on('dialog', dialog => dialog.accept());
    await page.locator("#alertbtn").click();
    
    //await page.pause();
    await page.locator("#mousehover").hover();
})

test('ScreenShot and Visual Comparision ', async ({page})=> 
{

    
    
await page.goto("https://rahulshettyacademy.com/automationPractice/");

    
    page.on('dialog', dialog => dialog.accept());
    await page.locator("#alertbtn").click();
    await page.screenshot({path : 'Downloads/screenshot.png'})

    

})

test('visual comparision', async ({page})=> 
{

await page.goto("https://rahulshettyacademy.com/automationPractice/");


    //await page.screenshot({path : 'Downloads/screenshot1.png'})
   // expect(await page.screenshot()).toMatchSnapshot('screenshota.png');

    

})

