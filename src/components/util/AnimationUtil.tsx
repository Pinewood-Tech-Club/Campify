"use client";

import cx from "classnames";
import css from "./AnimationUtil.module.css";

export function OnTextCopyAnimation(props: { className?: string }) {
  return (
    <a
      className={cx(
        "transition-all text-sm absolute border-[2px] border-gray-400 rounded-lg",
        props.className,
        css.onCopyAnimation
      )}
    >
      Copied!
    </a>
  );
}
