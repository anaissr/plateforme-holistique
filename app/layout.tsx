import type { Metadata } from "next";
import { Lora, Inter } from "next/font/google";
import "./globals.css";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://plateforme-holistique.vercel.app'),
  title: {
    default: "Holistia — Médecine alternative francophone",
    template: "%s | Holistia",
  },
  description: "Trouvez votre praticien vérifié en médecine holistique et médecines douces — naturopathie, sophrologie, ostéopathie, hypnothérapie — accompagnement bienveillant en cabinet ou en visio, accessible à toute la communauté francophone.",
  keywords: ["médecine holistique", "médecines douces", "praticien vérifié", "accompagnement", "approche intégrative", "santé globale", "bien-être", "naturopathe", "sophrologue", "ostéopathe", "hypnothérapeute", "francophone", "visio", "authentique", "collaboration"],
  authors: [{ name: "Holistia" }],
  verification: {
    google: 'MmL4k04zEH7mzBSq4pj_huuOFpUOfuK-3jL0H9-ZPlU',
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Holistia",
    title: "Holistia — Médecine holistique francophone",
    description: "Praticiens vérifiés en médecines douces — accompagnement bienveillant, approche intégrative, santé globale. En cabinet ou en visio, accessible à toute la communauté francophone.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=1200&h=630&fit=crop&crop=center",
        width: 1200,
        height: 630,
        alt: "Holistia — Praticiens en médecine alternative",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Holistia — Médecine alternative francophone",
    description: "Trouvez votre praticien en médecine alternative en cabinet ou en visio.",
    images: ["https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=1200&h=630&fit=crop&crop=center"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${lora.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}