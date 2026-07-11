import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "엔드필드 아카이브 | Endfield Archive",
  description: "명일방주: 엔드필드 팬 아카이브 - 우편함, 이벤트 기록",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        <div
          className="fixed inset-0 -z-10"
          style={{
            backgroundImage: `url('${process.env.NEXT_PUBLIC_BASE_PATH || ""}/background.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.3,
          }}
        />
        <div className="fixed inset-0 -z-10 bg-[var(--bg-primary)]" style={{ zIndex: -20 }} />
        {children}
      </body>
    </html>
  );
}
