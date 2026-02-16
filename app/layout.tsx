import type { Metadata } from "next";
import { Inter, Merriweather, Dancing_Script } from "next/font/google";
import Script from "next/script";

import "@/app/globals.css";

// App root layout
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-merriweather",
});
const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dancing-script",
});

export const metadata: Metadata = {
  title: "Apply for an Employer Identification Number (EIN) Online",
  description: "Official online application for Employer Identification Number (EIN). Fast, secure, and easy.",
  icons: {
    icon: "https://abstrakt.b-cdn.net/EIN_Logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-11484768851"
          strategy="afterInteractive"
        />
        <Script id="google-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-11484768851');
          `}
        </Script>
      </head>
      <body className={`${inter.variable} ${merriweather.variable} ${dancingScript.variable} font-sans antialiased bg-white text-slate-900`}>{children}</body>
    </html>
  );
}
