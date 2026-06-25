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
  title: "梅澤美波 OFFICIAL WEBSITE",
  description:
    "モデル・女優として活躍する梅澤美波のオフィシャルサイト。最新の出演情報やニュース、プロフィールを掲載しています。",
  icons: {
    icon: "/images/favicon.png",
    apple: "/images/apple-touch-icon.png",
  },
  openGraph: {
    title: "梅澤美波 OFFICIAL WEBSITE",
    description:
      "モデル・女優として活躍する梅澤美波のオフィシャルサイト。最新の出演情報やニュース、プロフィールを掲載しています。",
    type: "website",
    url: "https://minamiumezawa.jp",
    images: ["https://minamiumezawa.jp/images/36/31c/382e6ed04ed1498c44dccdd1ecf5c.png"],
    siteName: "梅澤美波 OFFICIAL WEBSITE",
  },
  twitter: {
    card: "summary_large_image",
    title: "梅澤美波 OFFICIAL WEBSITE",
    description:
      "モデル・女優として活躍する梅澤美波のオフィシャルサイト。最新の出演情報やニュース、プロフィールを掲載しています。",
    images: ["https://minamiumezawa.jp/images/36/31c/382e6ed04ed1498c44dccdd1ecf5c.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${notoSerifJP.variable} ${libreBaskerville.variable} antialiased`}
    >
      <body className="font-serif-jp text-[#333] bg-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
