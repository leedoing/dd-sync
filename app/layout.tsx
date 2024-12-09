import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { DatadogRUM } from "@/components/common/DatadogRUM";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Datadog Syncs Tool",
  description: "The Datadog Sync Tool facilitates seamless transfer of Dashboards and Monitors between accounts and also recommends standard Dashboards and Monitors for optimal usage.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <DatadogRUM />
        {children}
      </body>
    </html>
  );
}
