"use client";

import cx from "classnames";

export function HeaderText(props: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cx(props.className, "text-5xl text-center font-bold")}>
      {props.children}
    </div>
  );
}
