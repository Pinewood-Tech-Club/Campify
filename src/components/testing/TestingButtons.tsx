"use client";

import cx from "classnames";
import { useState } from "react";

export interface TestingButtonsProps {
  className?: string;
  onClickTest?: string;
  onClick?: () => void;
  key?: string;
  buttonDefaultText?: string;
}

export function TestingButton(props: TestingButtonsProps) {
  const [text, setText] = useState<string>(
    props.buttonDefaultText || "Click me!"
  );

  return (
    <button
      className={cx(
        props.className,
        "w-full rounded-lg border-2 bg-slate-300 transition-all duration-300 ease-out hover:bg-slate-400 border-black"
      )}
      onClick={() => {
        setText(props.onClickTest || "Clicked!");
        setTimeout(() => {
          setText(props.buttonDefaultText || "Click me!");
        }, 300);

        if (props.onClick) props.onClick();
      }}
      key={props.key}
    >
      {text}
    </button>
  );
}
