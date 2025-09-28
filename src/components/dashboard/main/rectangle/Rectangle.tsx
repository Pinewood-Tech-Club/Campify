"use client";

import { ReactNode } from "react";
import cx from "classnames";

export function Rectangle(props: { children: ReactNode; classname?: String }) {
  return (
    <div className={cx("rounded-3xl bg-white p-6", props.classname)}>
      {props.children}
    </div>
  );
}

export function RectangleHead(props: {
  children: ReactNode;
  classname?: String;
}) {
  return <div className="w-full h-1/4">{props.children}</div>;
}

export function RectangleHeaderText(props: {
  children: ReactNode;
  classname?: String;
}) {
  return (
    <div className="text-xl font-semibold flex justify-center">
      {props.children}
    </div>
  );
}

export function RectangleTopText(props: {
  children: [ReactNode, ReactNode?];
  classname?: String;
}) {
  return (
    <div className="flex flex-col">
      <div className="text-xl font-semibold">{props.children[0]}</div>
      <div className="text-sm text-gray-400">{props.children[1]}</div>
    </div>
  );
}
