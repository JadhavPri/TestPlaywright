import { test } from '@playwright/test';

test('Basic navigation', async({page})=>{
    await page.goto('https://about.gitlab.com/');
    await page.waitForTimeout(3000);
    await page.reload();
});

// cSpell:ignore onetrust
test('Interacting with a web element on gitlab', async({page})=>{
    await page.goto('https://about.gitlab.com/');
   
    await page.click('#onetrust-accept-btn-handler');
    //await page.waitForSelector('#onetrust-accept-btn-handler', { state: 'visible' });

    // onetrust-accept-btn-handler
   
    // Locator takes IdleDeadline, selector, x path 
     
    await page.locator('#be-navigation-desktop').getByRole('link',{name: 'Get free trial'}).click();
    await page.waitForTimeout(8000);

    // cSpell:ignore data-testid
    //await page.locator('[data-testid="new-user-first-name-field"]').fill('John1');
    //await page.locator('[data-testid="new-user-last-name-field"]').fill('Show1');
    await page.getByTestId('new-user-first-name-field').fill('John1');
    await page.getByTestId('new-user-last-name-field').fill('Show1');


})

test.only('USing various methods',async({page})=>{
    await page.goto('https://about.gitlab.com/');
    await page.click('#onetrust-accept-btn-handler');
    //await page.setViewportSize({ width: 960, height: 540 });
   // await page.getByRole('button',{name: 'Main menu'}).click();
    //await page.getByRole('link',{name: 'Sign in '}).click();
    await page.click(':has-text("Sign in ")');
    await page.waitForTimeout(15000);

})