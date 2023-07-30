const { test, expect } = require('@playwright/test');
//CHange to localhost on which it is running on
const nextjstest = 'http://localhost:3000/';

const HeaderTitle = 'Hello Professor'
const MainContent = 'Hello Professor!'

test.beforeEach(async ({ page }) => {
  await page.goto(nextjstest);
});

test('Check for Title Content', async ({ page }) => {
  await page.goto(nextjstest);
  const headerText = await page.textContent('title');
  await expect(headerText).toContain(HeaderTitle);
});

test('Check for H1 tag', async ({ page }) => {
  await page.goto(nextjstest);
  await expect(page.locator('h1')).toBeVisible();
});

// Test to check word 'Hello Professor!' in the Main Content
test('Check Content of Main', async ({ page }) => {
  await page.goto(nextjstest);
  const headerText = await page.textContent('h1');
  await expect(headerText).toContain(MainContent);
});


