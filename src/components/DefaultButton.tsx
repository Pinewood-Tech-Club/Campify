"use client";

import cx from "classnames";
import css from "./DefaultButton.module.css";

export interface ButtonProps {
  content: string;
  onClick: () => void;
}

export default function DefaultButton(props: ButtonProps) {
  return (
    <button
      className={cx(
        "w-full h-full border-4 border-black rounded-xl",
        css.button
      )}
      onClick={props.onClick}
    >
      {props.content}
    </button>
  );
}
