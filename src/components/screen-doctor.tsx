"use client";

import { useState } from "react";
import { track } from "@vercel/analytics";
import { useLanguage } from "@/i18n";
import { AUTO_TEST_DURATION_SECONDS } from "@/lib/config";
import { DISPLAY_TESTS } from "@/lib/tests";
import { ArrowIcon, CheckIcon, ExpandIcon } from "./icons";
import { LanguageSwitch } from "./language-switch";
import { SiteFooter } from "./site-footer";
import { TestRunner } from "./test-runner";

type View = "home" | "runner" | "result";

export function ScreenDoctor() {
  const [view, setView] = useState<View>("home");
  const [mode, setMode] = useState<"auto" | "manual">("auto");
  const { language, setLanguage, t } = useLanguage();

  const start = async (selectedMode: "auto" | "manual") => {
    setMode(selectedMode);
    track("display_test_started", { mode: selectedMode, language });
    await document.documentElement.requestFullscreen?.().catch(() => undefined);
    setView("runner");
  };

  if (view === "runner")
    return <TestRunner initialMode={mode} language={language} t={t} onFinish={() => setView("result")} />;

  if (view === "result") {
    return (
      <main className="result-page">
        <div className="ambient ambient--one" />
        <div className="ambient ambient--two" />
        <LanguageSwitch language={language} label={t.nav.language} onChange={setLanguage} />
        <section className="result-card">
          <div className="result-check">
            <CheckIcon />
          </div>
          <span className="eyebrow">{t.result.eyebrow}</span>
          <h1>{t.result.title}</h1>
          <p>{t.result.description}</p>
          <div className="result-notes">
            {t.result.notes.map((note) => (
              <span key={note}>
                <CheckIcon /> {note}
              </span>
            ))}
          </div>
          <button className="primary-button" onClick={() => void start("auto")}>
            {t.result.repeat} <ArrowIcon />
          </button>
          <button className="text-button" onClick={() => setView("home")}>
            {t.result.home}
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
        <a className="brand" href="#" aria-label={t.nav.home}>
          <span className="brand-mark">
            <i />
          </span>
          <b>screen doctor</b>
        </a>
        <div className="nav-tools">
          <div className="nav-status">
            <i /> {t.nav.offline}
          </div>
          <LanguageSwitch language={language} label={t.nav.language} onChange={setLanguage} />
        </div>
      </nav>
      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow">
            <i /> {t.hero.eyebrow}
          </span>
          <h1>
            {t.hero.title}
            <br />
            <em>{t.hero.titleAccent}</em>
          </h1>
          <p>{t.hero.description}</p>
          <div className="hero-actions">
            <button className="primary-button" onClick={() => void start("auto")}>
              {t.hero.start} <ArrowIcon />
            </button>
            <button className="secondary-button" onClick={() => void start("manual")}>
              <ExpandIcon /> {t.hero.manual}
            </button>
          </div>
          <small>{t.hero.fullscreenNote}</small>
        </div>
        <DisplayOrb pixelScan={t.hero.pixelScan} hzMotion={t.hero.hzMotion} />
      </section>
      <section className="stats">
        <div>
          <strong>{DISPLAY_TESTS.length}</strong>
          <span>{t.stats.tests}</span>
        </div>
        <div>
          <strong>
            {AUTO_TEST_DURATION_SECONDS} {t.stats.seconds}
          </strong>
          <span>{t.stats.auto}</span>
        </div>
        <div>
          <strong>100%</strong>
          <span>{t.stats.local}</span>
        </div>
      </section>
      <section className="test-preview">
        <div>
          <span className="eyebrow">{t.preview.eyebrow}</span>
          <h2>
            {t.preview.title}
            <br />
            {t.preview.titleAccent}
          </h2>
        </div>
        <p>{t.preview.description.replace("{count}", String(DISPLAY_TESTS.length))}</p>
        <div className="preview-grid">
          {t.preview.cards.map(([title, description], index) => (
            <article
              className={`preview-card preview-card--${["colors", "gradient", "grid", "motion"][index]}`}
              key={title}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{title}</strong>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter t={t} />
    </main>
  );
}

function DisplayOrb({ pixelScan, hzMotion }: { pixelScan: string; hzMotion: string }) {
  return (
    <div className="orb-wrap" aria-hidden="true">
      <div className="orb-ring orb-ring--one" />
      <div className="orb-ring orb-ring--two" />
      <div className="display-orb">
        <div className="orb-shine" />
        <div className="orb-grid" />
      </div>
      <div className="float-label float-label--top">
        <i /> {pixelScan}
      </div>
      <div className="float-label float-label--bottom">
        <span>120</span> {hzMotion}
      </div>
    </div>
  );
}
