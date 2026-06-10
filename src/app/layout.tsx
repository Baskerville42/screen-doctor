import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ServiceWorkerRegistration } from "@/components/service-worker-registration";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin", "cyrillic"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin", "cyrillic"] });

const title = "Screen Doctor — професійна перевірка дисплея";
const description =
  "Безкоштовний повноекранний тест дисплея на биті пікселі, засвіти, OLED-вигорання, banding, ghosting та інші дефекти.";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://screen-doctor.vercel.app"),
  title,
  description,
  applicationName: "Screen Doctor",
  keywords: ["тест дисплея", "биті пікселі", "screen test", "OLED burn-in", "monitor test"],
  authors: [{ name: "Baskerville42" }],
  manifest: "/manifest.webmanifest",
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    type: "website",
    locale: "uk_UA",
    url: "/",
    siteName: "Screen Doctor",
  },
  twitter: { card: "summary_large_image", title, description },
  icons: {
    icon: [{ url: "/icons/icon.svg", type: "image/svg+xml" }],
    apple: "/icons/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#07090d",
  colorScheme: "dark",
  viewportFit: "cover",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="uk" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        {children}
        <ServiceWorkerRegistration />
        <Analytics />
      </body>
    </html>
  );
}
