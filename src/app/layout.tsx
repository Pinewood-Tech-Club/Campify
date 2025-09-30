import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TRPCReactProvider } from "@/trpc/react";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/components/Navbar";
import ConvexClientProvider from "../../convex/provider";

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
          <ConvexClientProvider>
            <TRPCReactProvider>{children}</TRPCReactProvider>
          </ConvexClientProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
