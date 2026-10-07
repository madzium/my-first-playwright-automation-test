import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('CLI section scroll to bottom', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the CLI link in the top navigation.
  await page.getByRole('link', { name: 'CLI', exact: true }).click();
  await expect(page).toHaveURL(/agent-cli/);

  await page.waitForLoadState('load');

  // Scroll to the very bottom of the page (retry in case content is still rendering)
  // and expect the footer to be visible.
  await expect(async () => {
    await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight));
    await expect(page.locator('footer')).toBeInViewport({ timeout: 1000 });
  }).toPass();
});
