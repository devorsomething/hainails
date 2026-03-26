import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hainails – Nagelstudio & Beauty Spa | Bregenz",
  description:
    "Hainails in Bregenz: Nageldesign, Gel-Nägel, Acryl, Maniküre, Pediküre, Wimpern & Augenbrauen. Vietnamesische Nail-Art trifft österreichische Präzision.",
  keywords: "Nagelstudio Bregenz, Gel Nägel, Acryl, Maniküre, Pediküre, Wimpern, Augenbrauen, Beauty Spa Vorarlberg",
  openGraph: {
    title: "Hainails Nagelstudio Bregenz",
    description: "Professionelle Nagelpflege, Gel-Nägel & Nail Art in Bregenz",
    images: [
      {
        url: '/og?name=Hainails%20Nagelstudio&tagline=Nagelstudio%20%C2%B7%20Wellness%20%C2%B7%20Sch%C3%B6nheit&color=%23E8B4B8',
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
    locale: "de_AT",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hainails Nagelstudio Bregenz",
    description: "Professionelle Nagelpflege, Gel-Nägel & Nail Art in Bregenz",
    images: ['/og'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de-AT">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>💅</text></svg>" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
