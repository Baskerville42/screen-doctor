"use client";

import { useEffect, useState } from "react";
import { en } from "./en";
import { uk } from "./uk";

export type Language = "uk" | "en";
export type Dictionary = typeof uk | typeof en;
export const dictionaries = { uk, en };

export function useLanguage() {
  const [language, setLanguageState] = useState<Language>("uk");

  useEffect(() => {
    const saved = localStorage.getItem("screen-doctor-language");
    const detected = navigator.language.toLowerCase().startsWith("uk") ? "uk" : "en";
    const next = saved === "uk" || saved === "en" ? saved : detected;
    queueMicrotask(() => setLanguageState(next));
    document.documentElement.lang = next;
  }, []);

  const setLanguage = (next: Language) => {
    localStorage.setItem("screen-doctor-language", next);
    document.documentElement.lang = next;
    setLanguageState(next);
  };

  return { language, setLanguage, t: dictionaries[language] };
}
