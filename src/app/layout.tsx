import "./globals.css";
import React from "react";

export const metadata = {
  title: "Rock-paper-scissor",
  description: "Generated by create next app",
  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: ["Rock-paper-scissor"],
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#fff" }],
  authors: [
    { name: "Mohammad" },
    {
      name: "Mohammad",
      url: "https://github.com/mamad-1999",
    },
  ],
  viewport:
    "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
  icons: [
    { rel: "apple-touch-icon", url: "/icon-512x512.png" },
    { rel: "icon", url: "/icon-512x512.png" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
