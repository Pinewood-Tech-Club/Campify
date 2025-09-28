"use client";

import cx from "classnames";
import Link from "next/link";
import { ReactNode, useState } from "react";

export function Find(props: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className={cx(props.className, "flex w-full items-center mt-12 px-5")}>
      {props.children}
    </div>
  );
}

export function CreateNewButtonLinked(props: {
  className?: string;
  children: ReactNode;
  linkToGoTo: string;
}) {
  return (
    <Link className={props.className} href={props.linkToGoTo}>
      {props.children}
    </Link>
  );
}

export function CreateNewButton(props: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cx(props.className, "w-16 h-16 ml-5")}>
      {props.children}
    </div>
  );
}

export function EnableRemoveCampsSwitch(props: {
  className?: string;
  onClick: (state: boolean) => void;
}) {
  const [enabled, setEnabled] = useState(false);

  const toggleSwitch = () => {
    setEnabled(!enabled);
    props.onClick(enabled);
  };

  return (
    <button
      onClick={toggleSwitch}
      className={cx(
        "w-16 h-8 rounded-full p-1 flex items-center",
        enabled ? "bg-green-500" : "bg-gray-400",
        props.className
      )}
    >
      <div
        className={cx(
          "w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ease-in-out",
          enabled ? "translate-x-8" : "translate-x-0"
        )}
      />
    </button>
  );
}
