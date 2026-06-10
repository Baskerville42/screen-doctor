"use client";

import type { Language } from "@/i18n";

export function LanguageSwitch({
  language,
  label,
  onChange,
}: {
  language: Language;
  label: string;
  onChange: (language: Language) => void;
}) {
  return (
    <button
      className="language-switch"
      aria-label={label}
      onClick={() => onChange(language === "uk" ? "en" : "uk")}
    >
      <span className={language === "uk" ? "active" : ""}>UA</span>
      <span className={language === "en" ? "active" : ""}>EN</span>
    </button>
  );
}
