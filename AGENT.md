# Screen Doctor Development Guide

This document is the technical handoff for developers and coding agents maintaining Screen Doctor.

## Product Intent

Screen Doctor is both a real display diagnostics utility and a portfolio-quality web product. Changes should preserve three priorities:

1. Diagnostic patterns must remain visually accurate and pixel-sharp.
2. The test flow must stay extremely simple, fast, and registration-free.
3. The landing experience must retain its premium, restrained visual character.

The production site is [screen-doctor.vercel.app](https://screen-doctor.vercel.app), and the repository is [Baskerville42/screen-doctor](https://github.com/Baskerville42/screen-doctor).

## Core Architecture

- Next.js App Router provides static pages, metadata, OpenGraph, sitemap, and robots routes.
- `src/components/screen-doctor.tsx` owns the landing, result, and test-runner view transitions.
- `src/components/test-runner.tsx` owns automatic timing, keyboard controls, progress, and test completion.
- `src/lib/tests.ts` is the single source of truth for test order, pattern type, style class, and relative timing weight.
- `src/lib/config.ts` contains product-level settings and external URLs.
- `src/i18n/uk.ts` and `src/i18n/en.ts` contain all user-facing application and legal text.
- `src/app/globals.css` contains the visual system and diagnostic CSS patterns.
- Canvas 2D is intentionally limited to motion tests in `src/components/motion-canvas.tsx`.

Avoid adding a state management library unless complexity clearly requires one. The current component state is intentionally small and local.

## Localization

The application supports Ukrainian and English.

- Browser language is detected from `navigator.language`.
- A manual choice is persisted under the `screen-doctor-language` local storage key.
- Ukrainian and English dictionaries must remain structurally aligned.
- Do not add user-facing strings directly inside components. Add them to both dictionaries.
- Legal pages use the same dictionaries and language preference as the main tool.

After changing dictionary shapes, run `npm run typecheck`.

## Diagnostic Tests and Timing

The complete automatic cycle duration is configured by:

```ts
AUTO_TEST_DURATION_SECONDS;
```

in `src/lib/config.ts`.

Each test in `src/lib/tests.ts` has a relative `weight`. `getTestDuration()` distributes the configured total duration proportionally across all tests. Do not add hardcoded millisecond durations to individual components.

When adding or changing tests:

1. Add or edit the declarative test entry in `src/lib/tests.ts`.
2. Add its translated name and hint to both dictionaries.
3. Add the CSS pattern to `src/app/globals.css`, or use Canvas only when animation requires it.
4. Test fullscreen behavior on desktop and mobile.
5. Check for visual artifacts at different device pixel ratios.

Static patterns should use CSS where possible. This avoids raster scaling and keeps the bundle small.

## Analytics and Privacy

The project uses cookie-free Vercel Web Analytics.

Custom events currently include:

- `display_test_started`: mode and language;
- `display_test_completed`: mode, language, and number of tests viewed.

Do not send personal data, screen content, persistent device identifiers, or free-form user content to analytics. Update the bilingual Privacy Policy if analytics behavior changes.

## PWA and Offline Support

`public/sw.js` caches the landing page, legal pages, manifest, and PWA icons. Increment the cache version whenever cached routes or assets materially change.

Keep the service worker small and dependency-free. Verify offline behavior using a production build because service worker registration is disabled during development.

## Legal and External Links

Privacy Policy and Terms of Service are bilingual routes at `/privacy` and `/terms`. Product URLs, LinkedIn, repository URL, contact email, and the automatic duration setting live in `src/lib/config.ts`.

If data collection or service behavior changes, update both legal dictionaries before release.

## Visual Guidelines

- Preserve the dark, minimal, premium aesthetic.
- Avoid generic dashboard components, excessive gradients, or decorative dependencies.
- Keep diagnostic test surfaces free from interface elements except the intentionally translucent controls.
- Maintain responsive layouts at approximately 390px mobile width and 1280px desktop width.
- Respect `prefers-reduced-motion`.

## Development Workflow

Install and run:

```bash
npm ci
npm run dev
```

Before committing:

```bash
npm run format
npm run lint
npm run typecheck
npm run format:check
npm run build
```

For meaningful visual changes, verify the landing page, language switch, manual mode, automatic mode, result page, `/privacy`, and `/terms` in a browser.

## Release Workflow

- `main` is connected to Vercel production.
- GitHub Actions runs the `verify` job for lint, typecheck, formatting, and build.
- Pushes to `main` trigger automatic production deployment.
- Confirm CI succeeds and the Vercel deployment reaches `Ready`.
- Verify [screen-doctor.vercel.app](https://screen-doctor.vercel.app) after deployment.

## Repository Health

Keep the MIT license, README, Code of Conduct, contributing guide, security policy, support policy, issue forms, pull request template, Dependabot configuration, and CI workflow intact. These currently provide a 100% GitHub Community Standards profile.
