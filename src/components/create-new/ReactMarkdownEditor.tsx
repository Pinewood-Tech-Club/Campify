"use client";

import React, { RefObject, useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import { RemainingCharacterIndicator } from "./CreateNew";
import Link from "next/link";
import cx from "classnames";

export function MarkdownEditor(props: {
  defaultValue: string;
  maxChars: number;
  ref?: RefObject<HTMLTextAreaElement>;
  onTextChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  startingValue?: string;
}) {
  const [isVisible, setVisible] = useState<boolean>(false);
  const [remainingChars, setRemainingChars] = useState<number>(props.maxChars);
  const [isPreviewVisible, setIsPreviewVisible] = useState<boolean>(false);
  const [textValue, setTextValue] = useState<string>(props.startingValue ?? "");

  useEffect(() => {
    if (props.startingValue !== undefined) {
      setTextValue(props.startingValue);
      setRemainingChars(props.maxChars - props.startingValue.length);
    }
  }, [props.startingValue, props.maxChars]);

  return (
    <div className="w-full flex">
      <div className="w-3/5 flex flex-col">
        <div
          className={
            "w-full h-40 rounded-lg border-[1px] border-gray-400 bg-white"
          }
        >
          {(!isPreviewVisible && (
            <>
              <textarea
                placeholder={props.defaultValue}
                className="w-full h-full rounded-lg p-2 resize-none"
                maxLength={props.maxChars}
                onChange={(v) => {
                  setRemainingChars(props.maxChars - v.target.value.length);
                  setVisible(true);
                  setTextValue(v.target.value);
                  props.onTextChange(v);
                }}
                onSelect={() => {
                  setVisible(true);
                }}
                onBlur={() => {
                  setVisible(false);
                }}
                value={props.startingValue ?? ""}
                ref={props.ref}
              />
              <RemainingCharacterIndicator
                remaining={remainingChars}
                selected={isVisible}
              />
            </>
          )) || (
            <div className={"w-full h-full p-2"}>
              <ReactMarkdown>{textValue}</ReactMarkdown>
            </div>
          )}
        </div>
      </div>
      <SwitchToPreviewButton
        onClick={() => {
          setIsPreviewVisible(!isPreviewVisible);
        }}
      >
        Switch to {isPreviewVisible ? "Edit" : "Preview"}
      </SwitchToPreviewButton>
    </div>
  );
}

function SwitchToPreviewButton(props: {
  children: React.ReactNode;
  className?: string;
  onClick: () => void;
}) {
  return (
    <button
      className={cx(
        props.className,
        "ml-2 border-2 border-black rounded-lg w-36 h-fit p-2 font-light text-sm",
      )}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

/*
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <textarea
        style={{ width: "100%", height: "200px", marginBottom: "20px" }}
        value={markdown}
        onChange={handleChange}
      />
      <div style={{ width: "100%", border: "1px solid #ccc", padding: "10px" }}>
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
 */
