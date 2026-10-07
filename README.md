# Google automation test

Automatyczne testy end-to-end napisane w [Playwright](https://playwright.dev/) (TypeScript).
Testy uruchamiają się w trzech przeglądarkach: Chromium, Firefox i WebKit.

## Testy

Plik `tests/prod-tests.spec.ts`:

| Test | Co sprawdza |
| --- | --- |
| `has title` | Tytuł strony playwright.dev zawiera „Playwright”. |
| `get started link` | Link „Get started” prowadzi do strony z nagłówkiem „Installation”. |
| `CLI section scroll to bottom` | Link „CLI” w górnym menu otwiera sekcję CLI, a po przewinięciu na sam dół widać stopkę. |

## Wymagania

- [Node.js](https://nodejs.org/) w wersji LTS

## Uruchomienie

```bash
git clone <adres-repozytorium>
cd google-automation-test
npm ci
npx playwright install
npx playwright test
```

Przydatne komendy:

```bash
npx playwright test --ui        # tryb interaktywny
npx playwright test --headed    # z widocznym oknem przeglądarki
npx playwright show-report      # raport HTML z ostatniego uruchomienia
```

## CI

Workflow `.github/workflows/playwright.yml` uruchamia testy w GitHub Actions przy każdym pushu
i pull requeście. Wyniki widać w zakładce **Actions** repozytorium.
