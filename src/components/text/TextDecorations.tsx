"use client";

import cx from "classnames";
import { useEffect, useState } from "react";

interface TextDecorationsProps {
  children: React.ReactNode;
  className?: string;
}

export function HighlightedText(props: TextDecorationsProps) {
  return (
    <div className={cx("inline bg-yellow-200", props.className)}>
      {props.children}
    </div>
  );
}

export function LinkText(props: TextDecorationsProps & { href: string }) {
  return (
    <a
      href={props.href}
      className={cx("inline underline decoration-blue-800", props.className)}
    >
      {props.children}
    </a>
  );
}

export function SwitchTextFont(
  props: TextDecorationsProps & { fonts: string[] }
) {
  const [iterationCount, setIterationCount] = useState(0);
  const [curTextIndex, setCurTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurTextIndex((prevIndex) => (prevIndex + 1) % props.fonts.length);
      setIterationCount((prevCount) => prevCount + 1);
    }, 500);

    if (iterationCount >= 5) clearInterval(interval);

    return () => clearInterval(interval);
  }, [iterationCount]);

  return (
    <a className={cx(props.fonts[curTextIndex], props.className)}>
      {props.children}
    </a>
  );
}

export function TextWithImageLeft(props: {
  children: [React.ReactNode, React.ReactNode];
  className?: string;
}) {
  return (
    <div className={cx("flex", props.className)}>
      <div className="h-full">{props.children[0]}</div>
      <div className="grow ml-3 my-auto">{props.children[1]}</div>
    </div>
  );
}

export function DeleteCampButton(props: {
  onDelete: () => void;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <button
      className={cx(
        "w-36 h-10 rounded-lg ml-10 bg-red-600 text-xl text-red-200",
        "transform transition-transform duration-300 ease-in-out",
        "hover:scale-105 hover:bg-red-700 hover:shadow-lg",
        props.className
      )}
      onClick={props.onDelete}
    >
      {props.children}
    </button>
  );
}
