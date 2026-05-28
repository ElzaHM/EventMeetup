# Contributing to EventMeetup

Thank you for contributing. Please follow these guidelines so the codebase stays consistent and scalable.

## Package manager

- Use **pnpm only** (`pnpm install`, `pnpm dev`, `pnpm build`).
- Do not commit `package-lock.json` or `yarn.lock`.

## Internationalization

- **No hardcoded UI strings** in components or pages.
- Use `useTranslation()` from `react-i18next` and `t('key')` for all user-visible text.
- Add keys to every locale file under `src/locales/` (`en`, `ru`, `am`) before merging.

## Components and styling

- Prefer **reusable components** from `src/components/` (e.g. `Button`, `Container`) over one-off markup.
- **Responsive design is required** — test layouts from mobile through desktop.
- **No inline styles** — use Tailwind utility classes and shared tokens from `src/constants/ui.ts`.
- Use **TypeScript** with explicit props interfaces; avoid `any`.

## Project structure

- Keep the existing folder layout (`api`, `components`, `hooks`, `pages`, `store`, `types`, `utils`, etc.).
- Put route paths in `src/constants/routes.ts`.
- Put shared domain types in `src/types/`.
- Use mock data from `src/data/` until the API is wired.

## Code quality

- Run `pnpm lint` and `pnpm build` before opening a pull request.
- Keep changes focused and avoid unnecessary abstractions or new folders.
