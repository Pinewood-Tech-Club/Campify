"use client";

import { ReactNode } from "react";
import cx from "classnames";

interface SignInErrorProps {
  children: ReactNode;
  className?: string;
}

export function SignInError(
  props: SignInErrorProps & {
    ref?: React.RefObject<HTMLDivElement>;
    onAnimationEnd?: () => void;
  }
) {
  return (
    <div
      className={cx(
        "w-96 h-28 rounded-xl bg-red-100 absolute -translate-y-[100%]",
        props.className
      )}
      onAnimationEnd={props.onAnimationEnd}
      ref={props.ref}
    >
      {props.children}
    </div>
  );
}

export function ErrorMargin(props: SignInErrorProps) {
  return <div className={cx("p-1", props.className)}>{props.children}</div>;
}

export function ErrorHeaderText(props: SignInErrorProps) {
  return (
    <a
      className={cx(
        "text-2xl font-sans font-bold text-red-600",
        props.className
      )}
    >
      {props.children}
    </a>
  );
}

export function ErrorBodyText(props: SignInErrorProps) {
  return (
    <a
      className={cx(
        "text-md font-sans font-bold text-red-500",
        props.className
      )}
    >
      {props.children}
    </a>
  );
}

export function InvalidEmailError(props: {
  children: [ReactNode, ReactNode];
  className?: string;
}) {
  return (
    <div
      className={cx(
        "flex flex-col justify-center items-center text-center",
        props.className
      )}
    >
      <div>{props.children[0]}</div>
      <div className="mt-4">{props.children[1]}</div>
    </div>
  );
}
