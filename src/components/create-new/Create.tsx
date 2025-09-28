"use client";

import { ReactNode } from "react";
import cx from "classnames";

export function Create(props: { className?: string; children: ReactNode }) {
  return (
    <div className={cx(props.className, "flex flex-col gap-8")}>
      {props.children}
    </div>
  );
}

export function CreateCard(props: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cx(props.className, "flex flex-col")}>{props.children}</div>
  );
}

export function CreateMain(props: { className?: string; children: ReactNode }) {
  return (
    <div className={cx(props.className, "flex flex-col gap-8")}>
      {props.children}
    </div>
  );
}

export function AddMoreOptionsButton(props: {
  className?: string;
  children: ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      className={cx(
        props.className,
        "w-36 h-10 border-2 border-black rounded-lg bg-amber-300 text-center text-sm cursor-pointer"
      )}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
