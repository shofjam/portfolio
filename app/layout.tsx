import type { Metadata } from "next";
import type { ReactNode } from "react";
import Navigations from "../src/components/navigations";
import "./globals.css";

// Next.js layouts intentionally export metadata alongside the component.
// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
  title: "Shofhal Jamil — Full-stack developer",
  description:
    "The portfolio of Ahmad Shofhal Jamil, a full-stack developer specializing in resilient web products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col bg-ink text-paper">
          <Navigations />
          <main className="flex-1">{children}</main>
          <footer className="mt-2 border-t border-line text-sm text-muted">
            <div className="mx-auto flex min-h-[50px] w-[min(1120px,calc(100%-40px))] items-center justify-between gap-6 max-[720px]:flex-col max-[720px]:items-start max-[720px]:justify-center max-[720px]:gap-1">
              <span>© {new Date().getFullYear()} Shofhal Jamil</span>
              <span>Designed &amp; built with care.</span>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
