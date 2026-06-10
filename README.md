# Screen Doctor

Професійний веб-інструмент для повноекранної діагностики дисплеїв після ремонту або перед купівлею пристрою.

Screen Doctor запускає 20 спеціально підібраних сцен приблизно за 30 секунд і допомагає помітити биті та застряглі пікселі, засвіти, нерівномірність підсвітки, OLED burn-in, banding, ghosting і проблеми кольоропередачі.

## Можливості

- автоматичний 30-секундний цикл та ручний режим;
- Fullscreen API, клавіатурна і touch-friendly навігація;
- точні CSS-патерни та плавний Canvas 2D motion test;
- PWA-встановлення й офлайн-режим;
- адаптивний преміальний інтерфейс;
- SEO metadata, OpenGraph, Twitter Cards, sitemap і robots;
- Vercel Analytics без cookies;
- GitHub Actions для lint, typecheck і production build.

## Технології

Next.js 16, React 19, TypeScript, Tailwind CSS 4, Canvas 2D, Vercel Analytics.

Canvas 2D використано лише для motion-тестів: він дає стабільну частоту кадрів без ваги та складності повноцінного 3D-рушія. Статичні діагностичні патерни створені CSS, тому залишаються чіткими на будь-якій роздільній здатності.

## Локальний запуск

Потрібен Node.js 22+.

```bash
npm install
npm run dev
```

Відкрийте [http://localhost:3000](http://localhost:3000).

## Перевірки

```bash
npm run lint
npm run typecheck
npm run build
npm run format:check
```

## Керування тестом

- `→` або `Space`: наступний тест
- `←`: попередній тест
- `M`: перемкнути автоматичний/ручний режим
- `H` або подвійний клік: сховати/показати керування
- `Escape`: завершити

## Деплой на Vercel

1. Імпортуйте GitHub-репозиторій у Vercel.
2. Framework Preset визначиться як Next.js автоматично.
3. Додайте `NEXT_PUBLIC_SITE_URL` із production URL для canonical URL та sitemap.
4. Натисніть Deploy. Наступні push у `main` запускають production deployment.

Альтернатива через CLI:

```bash
npx vercel --prod
```

## Архітектура

```text
src/
  app/             App Router, metadata, SEO routes
  components/      landing, runner, canvas animation, PWA registration
  lib/tests.ts     декларативний каталог і таймінги тестів
public/
  icons/           PWA assets
  manifest.webmanifest
  sw.js            offline cache
.github/workflows/ci.yml
```

## Приватність

Зображення екрана не записується і не передається. Діагностика візуальна та виконується локально у браузері. Vercel Analytics збирає агреговану статистику відвідувань без cookies.

## License

MIT
