import type { Metadata } from "next";
import "./globals.css";
import { TopBar } from "@/components/TopBar";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Blog with Zustand",
  description: "Next.js + Zustand lab",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" data-theme="light">
      <body>
        <Providers>
          <TopBar />
          <main style={{ padding: "16px 24px", maxWidth: 950, margin: "0 auto" }}>
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
