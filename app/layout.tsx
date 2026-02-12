import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-merriweather",
});

export const metadata: Metadata = {
  title: "Apply for an Employer Identification Number (EIN) Online",
  description: "Official online application for Employer Identification Number (EIN). Fast, secure, and easy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${merriweather.variable} font-sans antialiased bg-white text-slate-900`}>{children}</body>
    </html>
  );
}
