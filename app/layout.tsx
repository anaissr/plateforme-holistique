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
  description: "Trouvez votre praticien en médecine alternative — naturopathie, sophrologie, ostéopathie, hypnothérapie — en cabinet ou en visio, partout dans le monde francophone.",
  keywords: ["médecine alternative", "naturopathe", "sophrologue", "ostéopathe", "hypnothérapeute", "bien-être", "holistique", "praticien", "visio"],
  authors: [{ name: "Holistia" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Holistia",
    title: "Holistia — Médecine alternative francophone",
    description: "Trouvez votre praticien en médecine alternative — naturopathie, sophrologie, ostéopathie, hypnothérapie — en cabinet ou en visio.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Holistia — Médecine alternative francophone",
    description: "Trouvez votre praticien en médecine alternative en cabinet ou en visio.",
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