"use client";

import cx from "classnames";
import { ReactNode } from "react";
import { DivListGrowCenter, DivList, DivListCenter } from "../util/DivUtil";

interface HeadingProps {
  children: ReactNode;
  className?: string;
}

export function Heading(props: HeadingProps) {
  return (
    <DivListCenter
      className={cx("h-full text-center mx-auto", props.className)}
    >
      {props.children}
    </DivListCenter>
  );
}

export function HeadingMargin(props: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cx("max-w-4xl", props.className)}>{props.children}</div>
  );
}

export function HeadingHead(props: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cx("inline font-medium text-9xl", props.className)}>
      {props.children}
    </div>
  );
}

export function HeadingBody(props: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cx("text-5xl leading-tight", props.className)}>
      {props.children}
    </div>
  );
}
