"use client";

import { GITHUB_URL, LINKEDIN_URL, SITE_NAME } from "@/lib/config";
import type { Dictionary } from "@/i18n";
import { GithubIcon, LinkedinIcon } from "./icons";
import Link from "next/link";

export function SiteFooter({ t }: { t: Dictionary }) {
  return (
    <footer>
      <Link className="brand" href="/" aria-label={t.nav.home}>
        <span className="brand-mark">
          <i />
        </span>
        <b>screen doctor</b>
      </Link>
      <p>{t.footer.tagline}</p>
      <nav className="footer-links" aria-label={t.footer.navigation}>
        <Link href="/privacy">{t.footer.privacy}</Link>
        <Link href="/terms">{t.footer.terms}</Link>
        <a
          className="social-link"
          href={GITHUB_URL}
          target="_blank"
          rel="noreferrer"
          aria-label={t.footer.github}
        >
          <GithubIcon />
        </a>
        <a
          className="social-link"
          href={LINKEDIN_URL}
          target="_blank"
          rel="noreferrer"
          aria-label={t.footer.linkedin}
        >
          <LinkedinIcon />
        </a>
        <span>
          © {new Date().getFullYear()} {SITE_NAME}
        </span>
      </nav>
    </footer>
  );
}
