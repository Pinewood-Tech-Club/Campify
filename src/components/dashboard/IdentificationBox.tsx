"use client";

import cx from "classnames";
import { useEffect, useRef, useState } from "react";

export function IdentificationBox(props: {
  children: React.ReactNode;
  className?: string;
  useRef?: React.RefObject<HTMLDivElement>;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}) {
  return (
    <div
      className={cx(
        props.className,
        "w-[500px] h-full bg-white rounded-xl p-4 pl-5"
      )}
      ref={props.useRef}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
    >
      {props.children}
    </div>
  );
}

function DefaultTextComponent(props: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cx("w-full h-1/3 flex", props.className)}>
      {props.children}
    </div>
  );
}

export function IdentificationBoxComponentGroup(props: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cx(props.className, "flex flex-col w-full")}>
      {props.children}
    </div>
  );
}

export function BoxHeaderTextComponent(props: {
  children: React.ReactNode;
  className?: string;
}) {
  return DefaultTextComponent({
    children: props.children,
    className: props.className + " text-5xl",
  });
}

export function BoxBodyTextComponent(props: {
  children: React.ReactNode;
  className?: string;
}) {
  return DefaultTextComponent({
    children: props.children,
    className: props.className + " opacity-70",
  });
}

export function BoxImageComponent(props: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cx("w-full", props.className)}>{props.children}</div>;
}

export function LineSeparator(props: { className?: string; style?: object }) {
  return (
    <div
      className={cx(
        "h-[2px] opacity-70 rounded-md w-full bg-gray-300",
        props.className
      )}
      style={props.style}
    />
  );
}

export function LineSeparatorWithText(props: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cx("flex w-full justify-center items-center", props.className)}
    >
      <LineSeparator className="flex-grow" style={{ flex: 1 }} />
      <div className="mx-2 text-center flex-none text-sm">{props.children}</div>
      <LineSeparator className="flex-grow" style={{ flex: 3 }} />
    </div>
  );
}

export function TextWithImageLeft(props: {
  children: [React.ReactNode, React.ReactNode];
  className?: string;
  onImageClick?: () => void;
  onMouseEnterImage?: () => void;
  onMouseLeaveImage?: () => void;
}) {
  return (
    <div className={cx("flex h-10", props.className)}>
      <div
        className="h-full cursor-pointer"
        onMouseEnter={props.onMouseEnterImage}
        onMouseLeave={props.onMouseLeaveImage}
        onClick={props.onImageClick}
      >
        {props.children[0]}
      </div>
      <div className="w-2/3 ml-3 my-auto">{props.children[1]}</div>
    </div>
  );
}

export function RegularText(props: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <div
      className={cx("text-base font-sans", props.className)}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
}

export function AccountAboutMeComponent(props: {
  children: [React.ReactNode, React.ReactNode];
  className?: string;
  onClick?: () => void;
}) {
  return (
    <div
      className={cx(
        "flex border-2 rounded-xl p-2 font-sans w-full",
        props.className
      )}
      onClick={props.onClick}
    >
      <div className="min-w-20 flex-shrink-0 font-sans">
        {props.children[0]}
      </div>
      <div className="ml-1 justify-center items-center">
        {props.children[1]}
      </div>
    </div>
  );
}

export function EditBox(props: {
  className?: string;
  onSubmit?: (words: string | null) => void;
  defaultValue?: string;
}) {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [charCount, setCharCount] = useState<number>(0);
  const maxLength = 200;

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
      setCharCount(inputRef.current.value.length);
    }
  }, []);

  return (
    <div>
      <textarea
        ref={inputRef}
        maxLength={maxLength}
        className={cx(
          "flex border-2 rounded-md font-sans px-1 display-none h-40 w-full resize-none textarea",
          props.className
        )}
        defaultValue={props.defaultValue}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            props.onSubmit?.(e.currentTarget.value);
          }

          if (e.key === "Escape") {
            props.onSubmit?.(null);
          }
        }}
        onChange={(e) => {
          setCharCount(e.target.value.length);
        }}
      />

      <div>{maxLength - charCount} characters remaining</div>
    </div>
  );
}

export function CopyText(props: { children: React.ReactNode }) {
  return (
    <div className="text-sm w-full flex items-center pl-2">
      {props.children}
    </div>
  );
}
