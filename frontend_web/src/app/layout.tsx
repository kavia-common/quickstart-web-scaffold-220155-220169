import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";

export const metadata: Metadata = {
  title: "Quickstart Retro",
  description: "Minimal quickstart scaffold with a retro-themed UI and an Express-backed API demo.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <div className="page">
          <NavBar />
          <div className="shell">{children}</div>
        </div>
      </body>
    </html>
  );
}
