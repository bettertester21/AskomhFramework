const { test,expect } = require('@playwright/test');
const { LoginPage } = require('../pages/login-page');


test("Login Test", async ({ browser }) => {
  
  const page = await browser.newPage();
  await page.goto('https://www.saucedemo.com/');
  const loginPage = new LoginPage(page);

  // // Enter username and password
  // await page.fill('#user-name', 'standard_user');
  // await page.fill('#password', 'secret_sauce');

  // // Click the login button
  // await page.click('#login-button');

  
  await loginPage.login('standard_user', 'secret_sauce');
const headerText = await page.locator("//*[@id='header_container']/div[1]/div[2]/div").textContent();
  console.log("Header Text: ", headerText);
  // Verify that the user is redirected to the inventory page
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

                                
});


test("Add to Cart Test", async ({ browser }) => {
  const page = await browser.newPage();
  await page.goto('https://www.saucedemo.com/');

  // Enter username and password
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');

  // Click the login button
  await page.click('#login-button');

  // Click the "Add to Cart" button for the first product
  await page.click('#add-to-cart-sauce-labs-backpack');

  // Verify that the cart badge shows "1"
  const cartBadgeText = await page.locator('.shopping_cart_badge').textContent();
  console.log("Cart Badge Text: ", cartBadgeText);
  await expect(cartBadgeText).toBe('1');
});