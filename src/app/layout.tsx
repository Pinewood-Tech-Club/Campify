import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TRPCReactProvider } from "@/trpc/react";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClerkProvider>
          <TRPCReactProvider>
            <Navbar
              nameOfWebsite={"Campify"}
              pfpImage={{
                src: "/default_pfp.svg",
                w: "w-16",
                h: "h-16",
              }}
            />

            {children}
          </TRPCReactProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
