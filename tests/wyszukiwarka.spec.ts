import { test, expect } from '@playwright/test';

test.describe('Wyszukiwarka dokumentacji', () => {

  test('znajduje stronę o lokatorach', async ({ page }) => {
    // Warunek wstępny: otwarta strona główna
    await page.goto('https://playwright.dev/');

    // Krok 1: kliknij przycisk wyszukiwania
    await page.getByRole('button', { name: 'Search' }).click();

    // Krok 2: wpisz szukaną frazę
    await page.getByRole('searchbox').fill('Locators');

    // Krok 3: kliknij pierwszy wynik na liście
    await page.getByRole('option').first().click();

    // Oczekiwany rezultat: otwarta strona "Locators"
    await expect(page).toHaveURL(/locators/);
    await expect(page.getByRole('heading', { level: 1 })).toHaveText('Locators');
  });

  test('pokazuje komunikat, gdy nic nie znaleziono', async ({ page }) => {
    // Warunek wstępny: otwarta strona główna
    await page.goto('https://playwright.dev/');

    // Kroki: otwórz wyszukiwarkę i wpisz nieistniejącą frazę
    await page.getByRole('button', { name: 'Search' }).click();
    await page.getByRole('searchbox').fill('xyzqwerty123');

    // Oczekiwany rezultat: komunikat o braku wyników
    await expect(page.getByText('No results found for')).toBeVisible();
  });

});
