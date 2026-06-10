# Screen Doctor

[Screen Doctor](https://screen-doctor.vercel.app) is a professional fullscreen display diagnostics tool for checking devices after repair or before purchase.

It runs 20 carefully selected diagnostic scenes in a 45-second automatic cycle and helps reveal dead or stuck pixels, backlight bleed, uneven illumination, OLED burn-in, color banding, ghosting, and color reproduction issues.

## Features

- 45-second automatic cycle and a manual inspection mode;
- automatic Ukrainian or English language detection with a manual switch;
- Fullscreen API with keyboard and touch-friendly navigation;
- pixel-precise CSS patterns and smooth Canvas 2D motion tests;
- installable PWA with offline support;
- responsive premium interface;
- SEO metadata, OpenGraph, Twitter Cards, sitemap, and robots.txt;
- cookie-free Vercel Analytics with test start, completion, and mode events;
- bilingual Privacy Policy and Terms of Service;
- complete GitHub Community Standards files;
- GitHub Actions verification for lint, types, formatting, and production builds.

## Technology

Next.js 16, React 19, TypeScript, Tailwind CSS 4, Canvas 2D, and Vercel Analytics.

Canvas 2D is used only for motion tests because it provides a stable frame rate without the weight and maintenance cost of a full 3D engine. Static diagnostic patterns use CSS so they remain sharp at every resolution and pixel density.

## Local Development

Node.js 22 or newer is required.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Verification

Run the same checks used by CI before opening a pull request:

```bash
npm run lint
npm run typecheck
npm run format:check
npm run build
```

## Test Controls

- `→` or `Space`: next test
- `←`: previous test
- `M`: switch between automatic and manual modes
- `H` or double-click: hide or show controls
- `Escape`: finish the test

## Deployment

The GitHub repository is connected to Vercel. Pushes to `main` trigger production deployments after CI verification.

For a manual production deployment:

```bash
npx vercel --prod
```

Set `NEXT_PUBLIC_SITE_URL` to the production URL when deploying under a different domain so canonical URLs and the sitemap remain correct.

## Architecture

```text
src/
  app/             App Router pages, metadata, SEO, and legal routes
  components/      landing, runner, footer, legal UI, and PWA registration
  i18n/            typed Ukrainian and English dictionaries
  lib/config.ts    product configuration, URLs, and automatic cycle duration
  lib/tests.ts     declarative test catalog and relative timing weights
public/
  icons/           PWA assets
  manifest.webmanifest
  sw.js            offline cache
.github/
  workflows/       CI verification
  ISSUE_TEMPLATE/  structured issue forms
```

See [AGENT.md](AGENT.md) for architecture decisions, maintenance guidance, and the recommended development workflow.

## Analytics and Privacy

Display images are never captured or transmitted. Diagnostics run locally in the browser.

Vercel Analytics provides aggregated, cookie-free traffic, referral, and device information. Custom events record whether automatic or manual tests start and complete, the selected language, and the number of tests viewed.

## Contributing

Read [CONTRIBUTING.md](CONTRIBUTING.md), [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md), and [SECURITY.md](SECURITY.md) before contributing.

## License

[MIT](LICENSE) © Alexander Tartmin
