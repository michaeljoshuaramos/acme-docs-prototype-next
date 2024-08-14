import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Acme Docs",
  description:
    "Acme Docs is a prototype documentation website, created as a personal project to enhance my frontend development skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="subpixel-antialiased">{children}</body>
    </html>
  );
}
