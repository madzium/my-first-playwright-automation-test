# My First Playwright Automation Test

Mój pierwszy projekt testów automatycznych, napisany w [Playwright](https://playwright.dev/) (TypeScript).
Jestem testerką manualną i uczę się automatyzacji. Testy sprawdzają stronę playwright.dev
w trzech przeglądarkach: Chromium, Firefox i WebKit.

## Przypadki testowe

Plik `tests/wyszukiwarka.spec.ts`:

**TC-01: Wyszukiwanie istniejącej frazy (test pozytywny)**
1. Otwórz https://playwright.dev
2. Kliknij „Search”
3. Wpisz `locators`
4. Kliknij pierwszy wynik

Oczekiwany rezultat: otwiera się strona z nagłówkiem „Locators”.

**TC-02: Wyszukiwanie nieistniejącej frazy (test negatywny)**
1. Otwórz https://playwright.dev
2. Kliknij „Search”
3. Wpisz `xyzqwerty123`

Oczekiwany rezultat: pojawia się komunikat „No results found for…”.

Plik `tests/example.spec.ts` to przykładowe testy wygenerowane przez Playwright przy instalacji.

## Uruchomienie

Wymagany [Node.js](https://nodejs.org/) w wersji LTS.

```bash
git clone https://github.com/madzium/my-first-playwright-automation-test.git
cd my-first-playwright-automation-test
npm ci
npx playwright install
npx playwright test
```

Przydatne komendy:

```bash
npx playwright test --ui        # tryb interaktywny
npx playwright show-report      # raport HTML z ostatniego uruchomienia
```

## CI

Testy uruchamiają się automatycznie w GitHub Actions po każdym pushu (zakładka **Actions**).

## Uwagi mile widziane

To moje pierwsze kroki w automatyzacji, więc chętnie przeczytam każdą uwagę.
Napisz w zakładce **Discussions** albo dodaj komentarz do konkretnej linijki kodu.
