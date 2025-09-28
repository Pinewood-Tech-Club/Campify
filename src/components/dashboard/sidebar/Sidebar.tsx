"use client";

import { useEffect, useState } from "react";
import cx from "classnames";
import css from "./Sidebar.module.css";
import Link from "next/link";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

const pages = ["home", "search", /*"feed", "leaderboard",*/ "settings"];
const extensions = ["svg", "svg", /*"png", "png",*/ "svg"];

export function SideBar() {
  const { data: session } = useSession();
  const [indicatorPosition, setIndicatorPosition] = useState(0);
  const page = usePathname();
  const nameOfPage = page.split("/").pop() ?? "";
  const [useIndicator, setUseIndicator] = useState<boolean>(
    pages.includes(nameOfPage)
  );

  useEffect(() => {
    setUseIndicator(pages.includes(nameOfPage));
    handleMouseEnterUpdate(pages.indexOf(nameOfPage));
  }, [nameOfPage]);

  function getIndicatorPosition(idex: number): number {
    return idex * 120;
  }

  const handleMouseEnterUpdate = (index: number) => {
    setIndicatorPosition(getIndicatorPosition(index));
  };

  const handleMouseLeaveUpdateToDefault = () => {
    handleMouseEnterUpdate(pages.indexOf(nameOfPage));
  };

  return (
    <SideBarContainer onMouseLeave={handleMouseLeaveUpdateToDefault}>
      <SideBarHead>
        <Image
          src={session?.user.image_url ?? "/default_pfp.svg"}
          alt={"1"}
          width={1000}
          height={1000}
          className="w-16 h-16 border-black rounded-lg"
          key={"1"}
        />
      </SideBarHead>
      <SideBarBody className="mt-10 relative">
        <SideBarEntries>
          {pages.map((item, index) => (
            <SideBarEntry
              className="cursor-pointer relative my-7"
              onMouseEnter={() => handleMouseEnterUpdate(index)}
              onClick={() => {}}
              name={item}
              link={`/main-page/${item}`}
            >
              <Image
                src={`/icons/${item}.${extensions[pages.indexOf(item)]}`}
                alt={item}
                width={50}
                height={50}
                className={cx(
                  "w-14 h-14 cursor-pointer",
                  item === nameOfPage ? "" : "opacity-50"
                )}
              />
            </SideBarEntry>
          ))}
        </SideBarEntries>
        {useIndicator && <LineIndicator top={indicatorPosition} className="" />}
      </SideBarBody>
      <SideBarBottom>
        <button
          className="cursor-pointer"
          onClick={() => signOut({ callbackUrl: "/", redirect: true })}
        >
          <Image
            src={"/icons/logout-svg.svg"}
            alt={"1"}
            width={50}
            height={50}
            className="w-12 h-12"
          />
        </button>
      </SideBarBottom>
    </SideBarContainer>
  );
}

export function SideBarContainer(props: {
  children: React.ReactNode;
  className?: string;
  onMouseLeave: () => void;
}) {
  return (
    <div
      className={cx(
        "w-32 h-full flex flex-col bg-cyan-500 pt-16 z-20",
        props.className
      )}
      onMouseLeave={props.onMouseLeave}
    >
      {props.children}
    </div>
  );
}

export function SideBarHead(props: { children: React.ReactNode }) {
  return (
    <div className="h-16 flex flex-col items-center">{props.children}</div>
  );
}

export function SideBarBody(props: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cx("h-full", props.className)}>{props.children}</div>;
}

export function SideBarEntries(props: { children: React.ReactNode }) {
  return <div className="h-full flex flex-col">{props.children}</div>;
}

export function SideBarEntreeSelected(props: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cx("w-full bg-cyan-400 flex justify-center", props.className)}
    >
      {props.children}
    </div>
  );
}

export function SideBarEntreeUnselected(props: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cx(
        "w-full bg-cyan-500 flex justify-center py-1",
        props.className
      )}
    >
      {props.children}
    </div>
  );
}

export function ClickableEntry(props: {
  children: React.ReactNode;
  className?: string;
  link: string;
  key: string;
}) {
  return (
    <Link href={props.link} passHref>
      {props.children}
    </Link>
  );
}

export function SideBarEntry(props: {
  children: React.ReactNode;
  className?: string;
  onMouseEnter: () => void;
  onClick: () => void;
  name?: string;
  link: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ClickableEntry key={"1"} link={props.link}>
        <div
          className={cx(
            "w-full flex justify-center p-1 relative",
            props.className
          )}
          style={{ transition: "all 0.3s ease-in-out", zIndex: 20 }}
          onMouseEnter={() => {
            props.onMouseEnter();
            setIsOpen(true);
          }}
          onMouseLeave={() => {
            setIsOpen(false);
          }}
          onClick={props.onClick}
        >
          {props.children}
        </div>
      </ClickableEntry>
    </>
  );
}

/*
      <div
        className={cx(
          "absolute w-28 h-14 bg-gray-300 rounded-2xl left-28 flex items-center justify-center text-xl font-bold transition-all duration-300 text-black",
          isOpen ? "opacity-50" : "opacity-0"
        )}
      >
        {props.name}
      </div>*/

export function LineIndicator({
  top,
  className,
}: {
  top: number;
  className?: string;
}) {
  return (
    <div
      className={cx(
        "absolute -left-[2px] w-2 h-8 my-10 bg-cyan-200 rounded-full",
        css["sidebar-indicator"],
        className
      )}
      style={{
        top: `${top}px`,
        zIndex: 10,
      }}
    />
  );
}

export function TransparentBoxIndicator({
  top,
  className,
}: {
  top: number;
  className?: string;
}) {
  return (
    <div
      className={cx(
        "absolute left-2 w-20 h-16 my-10 bg-gray-400 rounded-md opacity-z",
        css["sidebar-indicator"],
        className
      )}
      style={{
        zIndex: 30,
        top: `${top}px`,
      }}
    />
  );
}

export function SideBarBottom(props: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className="w-full h-16 flex flex-col items-center mb-5">
      {props.children}
    </div>
  );
}
