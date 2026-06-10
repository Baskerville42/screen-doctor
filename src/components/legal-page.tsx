"use client";

import { CONTACT_EMAIL } from "@/lib/config";
import { useLanguage } from "@/i18n";
import Link from "next/link";
import { LanguageSwitch } from "./language-switch";
import { SiteFooter } from "./site-footer";

export function LegalPage({ type }: { type: "privacy" | "terms" }) {
  const { language, setLanguage, t } = useLanguage();
  const title = type === "privacy" ? t.legal.privacyTitle : t.legal.termsTitle;
  const intro = type === "privacy" ? t.legal.privacyIntro : t.legal.termsIntro;
  const sections = type === "privacy" ? t.legal.privacySections : t.legal.termsSections;

  return (
    <main className="legal-page">
      <div className="noise" />
      <div className="ambient ambient--one" />
      <nav className="nav-shell">
        <Link className="brand" href="/" aria-label={t.nav.home}>
          <span className="brand-mark">
            <i />
          </span>
          <b>screen doctor</b>
        </Link>
        <LanguageSwitch language={language} label={t.nav.language} onChange={setLanguage} />
      </nav>
      <article className="legal-content">
        <Link className="legal-back" href="/">
          ← {t.legal.back}
        </Link>
        <span className="eyebrow">{t.legal.updated}</span>
        <h1>{title}</h1>
        <p className="legal-intro">{intro}</p>
        {sections.map(([heading, body]) => (
          <section key={heading}>
            <h2>{heading}</h2>
            <p>{body.replace("{email}", CONTACT_EMAIL)}</p>
          </section>
        ))}
      </article>
      <SiteFooter t={t} />
    </main>
  );
}
