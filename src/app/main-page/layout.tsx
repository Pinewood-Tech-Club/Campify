import { Inter } from "next/font/google";
import { SideBar } from "../../components/dashboard/sidebar/Sidebar";
import cx from "classnames";
import { SessionProvider } from "next-auth/react";
import { getServerSession } from "next-auth";
import "@liveblocks/react-ui/styles.css";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  //console.log(session);

  return (
    <html lang="en">
      <body className={cx(inter.className)}>
        <div className="flex h-screen w-screen">
          <div className="z-10">
            <SideBar />
          </div>

          <div className="bg-[#e1f4ff] w-full h-full flex-grow overflow-y-auto z-0 p-4">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
