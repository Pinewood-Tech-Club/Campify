"use client";

import { ReactNode } from "react";
import cx from "classnames";

export function Rectangle(props: { children: ReactNode; classname?: String }) {
  return (
    <div
      className={cx(
        "rounded-3xl bg-white border-2 border-green-200 shadow-md p-6",
        props.classname
      )}
    >
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
    <div className="text-xl font-semibold flex justify-center text-green-800">
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
      <div className="text-xl font-semibold text-green-800">
        {props.children[0]}
      </div>
      <div className="text-sm text-gray-500">{props.children[1]}</div>
    </div>
  );
}
