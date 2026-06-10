import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy | Screen Doctor",
  description: "How Screen Doctor handles data and protects privacy.",
  alternates: { canonical: "/privacy" },
};
export default function PrivacyPage() {
  return <LegalPage type="privacy" />;
}
