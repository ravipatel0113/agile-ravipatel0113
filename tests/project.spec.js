const { test, expect } = require('@playwright/test');
//CHange to localhost on which it is running on
const nextjstest = 'http://localhost:3000/';

// Test to check word 'Blog' in the Header
test('Check Header for title', async ({ page }) => {
  await page.goto(nextjstest);
  const headerText = await page.textContent('h1');
  await expect(headerText).toContain('Blog');
});


