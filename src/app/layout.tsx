import type { Metadata } from "next";
import Providers from "./Providers";
import Navbar from "@/component/Navbar";
import Hero from "@/component/Hero";
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />
          <Hero>
            {children}
          </Hero>
        </Providers>
      </body>
    </html>
  );
}
