import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Terms of Service | Screen Doctor",
  description: "Terms governing use of the free Screen Doctor display diagnostics service.",
  alternates: { canonical: "/terms" },
};
export default function TermsPage() {
  return <LegalPage type="terms" />;
}
