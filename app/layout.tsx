import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Максим Ефимов — Software Developer",
  description: "Portfolio of Maxim Efimov, Software Developer focused on React, Next.js, TypeScript and production-ready web products.",
  metadataBase: new URL("https://portfolio-five-theta-90.vercel.app"),
  openGraph: {
    title: "Максим Ефимов — Software Developer",
    description: "React, Next.js, TypeScript, full-cycle product delivery and production engineering.",
    images: ["/maxim-efimov.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
