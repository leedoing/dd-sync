import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { datadogRum } from '@datadog/browser-rum';

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

// Datadog RUM initialization
if (typeof window !== 'undefined') {
  datadogRum.init({
    applicationId: '267deee3-0bfc-439b-a059-e20ac7c1afd2',
    clientToken: 'pub438544fdaf9c6399426a1fa39453ef00',
    site: 'datadoghq.com',
    service: 'dd-sync',
    env: 'prod',
    sessionSampleRate: 100,
    sessionReplaySampleRate: 100,
    trackUserInteractions: true,
    trackResources: true,
    trackLongTasks: true,
    defaultPrivacyLevel: 'allow',
  });
}

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
