"use client";

import cx from "classnames";
import Image from "next/image";

export function CampItem(props: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cx(
        props.className,
        "w-full h-full flex pl-5 pr-5 gap-10 grow"
      )}
    >
      {props.children}
    </div>
  );
}

export function CampItemChatComponent(props: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cx(
        props.className,
        "flex flex-col grow overflow-y-auto z-50 pr-4 mt-10"
      )}
      style={{ scrollbarWidth: "thin" }}
    >
      {props.children}
    </div>
  );
}

export function CampItemContent(props: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cx(
        props.className,
        "w-[69%] h-full flex flex-col overflow-y-auto mt-10"
      )}
      style={{
        scrollbarWidth: "none",
      }}
    >
      {props.children}
    </div>
  );
}

export function CampItemHead(props: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cx(props.className, "w-full flex flex-col pb-2")}>
      {props.children}
    </div>
  );
}

export function CampItemDividerLine(props: { className?: string }) {
  return (
    <div
      className={cx(
        props.className,
        "w-full h-[1px] bg-gray-400 rounded-xl my-3"
      )}
    />
  );
}

export function CampItemHeaderText(props: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cx(props.className, "min-h-10 text-4xl font-semibold")}>
      {props.children}
    </div>
  );
}

export function HeaderBody(props: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cx(props.className, "flex flex-col w-full")}>
      {props.children}
    </div>
  );
}

export function HeaderTagGroup(props: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cx(props.className, "flex gap-1")}>{props.children}</div>
  );
}

export function CampItemTag(props: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cx(
        props.className,
        "flex items-center justify-center cursor-default rounded-full bg-blue-100 border border-blue-300 text-blue-800 px-3 py-1 text-sm font-medium shadow-sm hover:bg-blue-200 transition-colors duration-200"
      )}
    >
      {props.children}
    </div>
  );
}

export function HeaderDescriptionText(props: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a className={cx(props.className, "text-xl opacity-70 w-full")}>
      {props.children}
    </a>
  );
}

export function VerticalLine(props: { className?: string }) {
  return (
    <div className={cx(props.className, "h-full w-[1.5px] bg-gray-500")} />
  );
}

export function CampItemChat(props: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cx(props.className, "grow h-full")}>{props.children}</div>
  );
}

export function ChatItemEntry(props: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cx(props.className, "w-full h-full flex flex-col")}>
      {props.children}
    </div>
  );
}

export function ChatItemProducerInformation(props: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cx(props.className, "flex w-full")}>{props.children}</div>
  );
}

export function ChatItemImage(props: { className?: string; path: string }) {
  return (
    <Image
      src={props.path}
      alt={"1"}
      width={1000}
      height={1000}
      className={cx(
        props.className,
        "w-10 h-10 rounded-full border-black border-[1.5px]"
      )}
    />
  );
}

export function Dot() {
  return <div className="w-1 h-1 mx-2 rounded-full bg-black" />;
}

export function ChatItemChatInfo(props: {
  className?: string;
  children: [React.ReactNode, React.ReactNode];
}) {
  return (
    <div className={cx("grow flex items-center ml-2", props.className)}>
      {props.children[0]}
      <Dot />
      {props.children[1]}
    </div>
  );
}

export function ChatHeaderNameText(props: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a className={cx(props.className, "font-semibold text-md")}>
      {props.children}
    </a>
  );
}

export function ChatMediumNameText(props: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a className={cx(props.className, "text-md opacity-80")}>
      {props.children}
    </a>
  );
}
