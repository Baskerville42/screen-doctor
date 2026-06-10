"use client";

import { useState } from "react";
import { DISPLAY_TESTS } from "@/lib/tests";
import { ArrowIcon, CheckIcon, ExpandIcon } from "./icons";
import { TestRunner } from "./test-runner";

type View = "home" | "runner" | "result";

const FEATURES = [
  ["20", "точних тестів"],
  ["30 с", "автоматичний цикл"],
  ["100%", "працює локально"],
];

export function ScreenDoctor() {
  const [view, setView] = useState<View>("home");
  const [mode, setMode] = useState<"auto" | "manual">("auto");

  const start = async (selectedMode: "auto" | "manual") => {
    setMode(selectedMode);
    await document.documentElement.requestFullscreen?.().catch(() => undefined);
    setView("runner");
  };

  if (view === "runner") return <TestRunner initialMode={mode} onFinish={() => setView("result")} />;

  if (view === "result") {
    return (
      <main className="result-page">
        <div className="ambient ambient--one" />
        <div className="ambient ambient--two" />
        <section className="result-card">
          <div className="result-check">
            <CheckIcon />
          </div>
          <span className="eyebrow">Перевірку завершено</span>
          <h1>Як виглядає ваш дисплей?</h1>
          <p>
            Ми показали всі патерни. Остаточну оцінку робите ви — жодне зображення не передавалось із
            пристрою.
          </p>
          <div className="result-notes">
            <span>
              <CheckIcon /> Кольори рівномірні
            </span>
            <span>
              <CheckIcon /> Немає нерухомих пікселів
            </span>
            <span>
              <CheckIcon /> Рух виглядає плавно
            </span>
          </div>
          <button className="primary-button" onClick={() => void start("auto")}>
            Повторити перевірку <ArrowIcon />
          </button>
          <button className="text-button" onClick={() => setView("home")}>
            На головну
          </button>
        </section>
      </main>
    );
  }

  return (
    <main className="home">
      <div className="noise" />
      <div className="ambient ambient--one" />
      <div className="ambient ambient--two" />
      <nav className="nav-shell">
        <a className="brand" href="#" aria-label="Screen Doctor, головна">
          <span className="brand-mark">
            <i />
          </span>
          <b>screen doctor</b>
        </a>
        <div className="nav-status">
          <i /> Працює офлайн
        </div>
      </nav>

      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow">
            <i /> Діагностика дисплея
          </span>
          <h1>
            Кожен піксель
            <br />
            <em>має значення.</em>
          </h1>
          <p>
            Професійна перевірка екрана на биті пікселі, засвіти, вигорання, banding і ghosting. Без
            реєстрації. Просто натисніть старт.
          </p>
          <div className="hero-actions">
            <button className="primary-button" onClick={() => void start("auto")}>
              Почати перевірку <ArrowIcon />
            </button>
            <button className="secondary-button" onClick={() => void start("manual")}>
              <ExpandIcon /> Ручний режим
            </button>
          </div>
          <small>Браузер може попросити дозвіл на повноекранний режим.</small>
        </div>
        <DisplayOrb />
      </section>

      <section className="stats" aria-label="Переваги Screen Doctor">
        {FEATURES.map(([value, label]) => (
          <div key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>

      <section className="test-preview">
        <div>
          <span className="eyebrow">Повний огляд</span>
          <h2>
            Від чистого білого
            <br />
            до швидкого руху.
          </h2>
        </div>
        <p>
          {DISPLAY_TESTS.length} спеціально підібраних сцен допоможуть помітити дефекти матриці, які легко
          пропустити під час звичайного використання.
        </p>
        <div className="preview-grid">
          <article className="preview-card preview-card--colors">
            <span>01</span>
            <strong>Чисті кольори</strong>
            <p>Биті та застряглі пікселі</p>
          </article>
          <article className="preview-card preview-card--gradient">
            <span>02</span>
            <strong>Градієнти</strong>
            <p>Banding та кольоропередача</p>
          </article>
          <article className="preview-card preview-card--grid">
            <span>03</span>
            <strong>Геометрія</strong>
            <p>Рівність матриці й артефакти</p>
          </article>
          <article className="preview-card preview-card--motion">
            <span>04</span>
            <strong>Рух</strong>
            <p>Ghosting, шлейфи та ривки</p>
          </article>
        </div>
      </section>

      <footer>
        <a className="brand" href="#">
          <span className="brand-mark">
            <i />
          </span>
          <b>screen doctor</b>
        </a>
        <p>Створено для чесної перевірки техніки.</p>
        <span>© {new Date().getFullYear()}</span>
      </footer>
    </main>
  );
}

function DisplayOrb() {
  return (
    <div className="orb-wrap" aria-hidden="true">
      <div className="orb-ring orb-ring--one" />
      <div className="orb-ring orb-ring--two" />
      <div className="display-orb">
        <div className="orb-shine" />
        <div className="orb-grid" />
      </div>
      <div className="float-label float-label--top">
        <i /> Pixel scan
      </div>
      <div className="float-label float-label--bottom">
        <span>120</span> Hz motion
      </div>
    </div>
  );
}
