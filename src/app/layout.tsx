import type { Metadata } from "next";
import { Noto_Serif_JP, Libre_Baskerville } from "next/font/google";
import "./globals.css";

const notoSerifJP = Noto_Serif_JP({
  variable: "--font-noto-serif-jp",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "LILITH'S CATS",
  description: "好运常在，万事大吉 — 李好运与李大吉的专属主页。",
  icons: {
    icon: "/images/favicon.png",
    apple: "/images/apple-touch-icon.png",
  },
  openGraph: {
    title: "LILITH'S CATS",
    description: "好运常在，万事大吉 — 李好运与李大吉的专属主页。",
    type: "website",
    images: ["/images/og-image.png"],
    siteName: "LILITH'S CATS",
  },
  twitter: {
    card: "summary_large_image",
    title: "LILITH'S CATS",
    description: "好运常在，万事大吉 — 李好运与李大吉的专属主页。",
    images: ["/images/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${notoSerifJP.variable} ${libreBaskerville.variable} antialiased`}
    >
      <body className="font-serif-jp text-[#333] bg-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
