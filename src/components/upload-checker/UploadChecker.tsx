"use client";

import { ReactNode } from "react";
import cx from "classnames";
import tw from "tailwind-styled-components";

export function UploadChecker(props: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cx(props.className, "flex flex-col w-full h-full")}>
      {props.children}
    </div>
  );
}

export function UploadCheckerHead(props: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cx(props.className, "flex flex-col items-center pt-5 gap-2")}
    >
      {props.children}
    </div>
  );
}

export function UploadCheckerMainTextBox(props: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cx(
        "flex flex-col justify-center items-center text-center w-96 gap-2",
        props.className
      )}
    >
      {props.children}
    </div>
  );
}

export function UploadCheckerMainHeaderText(props: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cx("text-4xl font-semibold", props.className)}>
      {props.children}
    </div>
  );
}

export function UploadCheckerDescHeaderText(props: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cx("text-xl font-light", props.className)}>
      {props.children}
    </div>
  );
}

export function UploadCheckerBody(props: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cx(
        "w-full h-full flex flex-col gap-3 items-center justify-center",
        props.className
      )}
    >
      {props.children}
    </div>
  );
}
