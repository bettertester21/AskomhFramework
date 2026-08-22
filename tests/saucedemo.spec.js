const { test,expect } = require('@playwright/test');

test("Login Test", async ({ browser }) => {
  
  const page = await browser.newPage();
  await page.goto('https://www.saucedemo.com/');

  // Enter username and password
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');

  // Click the login button
  await page.click('#login-button');

  // Verify that the user is redirected to the inventory page
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
                                
});