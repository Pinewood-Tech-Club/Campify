"use client";

import { Inter } from "next/font/google";
import { SideBar } from "../../components/dashboard/sidebar/Sidebar";
import cx from "classnames";
import "@liveblocks/react-ui/styles.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={cx(inter.className, "flex h-screen w-screen")}>
      <div className="z-10">
        <SideBar />
      </div>

      <div className="bg-[#e1f4ff] w-full h-full flex-grow overflow-y-auto z-0 p-4">
        {children}
      </div>
    </div>
  );
}
