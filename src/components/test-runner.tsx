"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { track } from "@vercel/analytics";
import type { Dictionary, Language } from "@/i18n";
import { DISPLAY_TESTS, getTestDuration, TOTAL_AUTO_DURATION } from "@/lib/tests";
import { ChevronIcon, ExpandIcon } from "./icons";
import { MotionCanvas } from "./motion-canvas";

type RunnerProps = {
  initialMode: "auto" | "manual";
  language: Language;
  t: Dictionary;
  onFinish: () => void;
};

export function TestRunner({ initialMode, language, t, onFinish }: RunnerProps) {
  const [mode, setMode] = useState(initialMode);
  const [index, setIndex] = useState(0);
  const [controls, setControls] = useState(true);
  const test = DISPLAY_TESTS[index];
  const [name, hint] = t.tests[test.id];

  const finish = useCallback(async () => {
    track("display_test_completed", { mode, language, testsViewed: index + 1 });
    if (document.fullscreenElement) await document.exitFullscreen().catch(() => undefined);
    onFinish();
  }, [index, language, mode, onFinish]);

  const go = useCallback((direction: number) => {
    setIndex((current) => Math.min(Math.max(current + direction, 0), DISPLAY_TESTS.length - 1));
  }, []);

  useEffect(() => {
    if (mode !== "auto") return;
    const timer = window.setTimeout(() => {
      if (index === DISPLAY_TESTS.length - 1) void finish();
      else setIndex((value) => value + 1);
    }, getTestDuration(test));
    return () => window.clearTimeout(timer);
  }, [finish, index, mode, test]);

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight" || event.key === " ") go(1);
      if (event.key === "ArrowLeft") go(-1);
      if (event.key === "Escape") void finish();
      if (event.key.toLowerCase() === "m") setMode((value) => (value === "auto" ? "manual" : "auto"));
      if (event.key.toLowerCase() === "h") setControls((value) => !value);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [finish, go]);

  const progress = useMemo(() => {
    const elapsed = DISPLAY_TESTS.slice(0, index).reduce((sum, item) => sum + getTestDuration(item), 0);
    return mode === "auto"
      ? (elapsed / TOTAL_AUTO_DURATION) * 100
      : ((index + 1) / DISPLAY_TESTS.length) * 100;
  }, [index, mode]);

  return (
    <main className="runner" onDoubleClick={() => setControls((value) => !value)}>
      <div
        className={`test-surface ${test.className ?? ""}`}
        style={test.color ? { background: test.color } : undefined}
      >
        {test.kind === "motion" && (
          <MotionCanvas inverse={test.className === "inverse"} label={t.runner.motionLabel} />
        )}
      </div>
      <div className={`runner-ui ${controls ? "" : "runner-ui--hidden"}`}>
        <div className="progress-track">
          <span style={{ width: `${progress}%` }} />
        </div>
        <header className="runner-top">
          <div className="runner-title">
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div>
              <strong>{name}</strong>
              <p>{hint}</p>
            </div>
          </div>
          <button className="glass-button" onClick={finish}>
            <ExpandIcon /> {t.runner.finish}
          </button>
        </header>
        <div className="runner-bottom">
          <button
            className="runner-arrow"
            disabled={index === 0}
            onClick={() => go(-1)}
            aria-label={t.runner.previous}
          >
            <ChevronIcon className="rotate-180" />
          </button>
          <button className="mode-switch" onClick={() => setMode(mode === "auto" ? "manual" : "auto")}>
            <span className={mode === "auto" ? "active" : ""}>{t.runner.auto}</span>
            <span className={mode === "manual" ? "active" : ""}>{t.runner.manual}</span>
          </button>
          <button
            className="runner-arrow"
            onClick={() => (index === DISPLAY_TESTS.length - 1 ? void finish() : go(1))}
            aria-label={t.runner.next}
          >
            <ChevronIcon />
          </button>
        </div>
      </div>
    </main>
  );
}
