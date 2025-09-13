# Repository Guidelines

## Project Structure & Module Organization
- `src/` — application code (React + TypeScript).
  - `src/components/` — UI components (e.g., `About.tsx`, `Hero.tsx`).
  - `src/components/__tests__/` — component tests (e.g., `About.test.tsx`).
  - `App.tsx`, `main.tsx`, `index.css` — app entry and global styles.
- `dist/` — build output (generated).
- `vitest.config.ts`, `setupTests.ts` — test runtime configuration.
- `tailwind.config.js`, `postcss.config.js` — styling pipeline.

## Build, Test, and Development Commands
- `npm run dev` — start Vite dev server.
- `npm run build` — production build to `dist/`.
- `npm run preview` — preview the built app.
- `npm run lint` — run ESLint.
- `npm run test` — run Vitest once (CI mode).
- `npm run test:watch` — watch mode for tests.
- `npm run test:coverage` — run tests with coverage report.

## Coding Style & Naming Conventions
- Language: TypeScript, React 18 functional components.
- Indentation: 2 spaces; avoid trailing whitespace.
- Filenames: Components in `PascalCase` (e.g., `About.tsx`).
- Exports: default export for single-component files.
- Styling: Tailwind CSS utility classes; keep class lists readable and grouped logically.
- Linting: follow `eslint.config.js`; do not introduce new linters/formatters without discussion.

## Testing Guidelines
- Framework: Vitest (`jsdom`) with React Testing Library and `@testing-library/jest-dom`.
- Test location: `__tests__/Component.test.tsx` near the component.
- Prefer accessible queries (`getByRole`, `getByText`) over test ids.
- Cover headings, key text, and conditional rendering. Keep tests deterministic and UI-focused.

## Commit & Pull Request Guidelines
- Commits: small, focused, imperative subject (e.g., "Add About tests"). Include scope when helpful.
- PRs: clear description, rationale, linked issues, and screenshots/GIFs for UI changes. Note any breaking changes or follow-ups.

## Agent-Specific Notes
- Keep changes minimal and consistent with existing style. Avoid unrelated refactors.
- Update or add tests for any component changes. Do not commit secrets or environment-specific files.
