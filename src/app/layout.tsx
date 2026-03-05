import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/Navigation";

export const metadata: Metadata = {
  title: "教えて宮崎先生 — ファウンダー向けのやさしいClaude Code",
  description:
    "5ヵ年事業計画とMVPの作り方。StartPass × AppTalentHub DXBoostショート講座の研修資料です。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-bg text-text min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1">{children}</main>
        <footer className="bg-primary-dark text-white/60 py-8">
          <div className="max-w-5xl mx-auto px-4 text-center text-sm">
            <p>
              &copy; 2026{" "}
              <a
                href="https://apptalenthub.co.jp/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                AppTalentHub Inc.
              </a>{" "}
              &times;{" "}
              <a
                href="https://startpass.jp/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                StartPass Inc.
              </a>
            </p>
            <p className="mt-1 text-white/40">
              DXBoost ショート講座 研修資料
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
