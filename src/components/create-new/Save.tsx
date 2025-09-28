"use client";

import cx from "classnames";

export function SaveBox(props: {
  className?: string;
  children: React.ReactNode;
  isVisible: boolean;
}) {
  return (
    <div
      className={cx(
        props.className,
        "bg-green-300 rounded-lg w-56 h-28 absolute top-0 left-1/2",
      )}
    >
      {props.children}
    </div>
  );
}
