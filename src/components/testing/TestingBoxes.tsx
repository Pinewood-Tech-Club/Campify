"use client";

import { useState } from "react";
import { TestingButton, type TestingButtonsProps } from "./TestingButtons";

export function TestingBoxWithText(props: {
  textToRender: string;
  onButtonClick?: () => Promise<string>;
  buttonDefaultText?: string;
  timeToWaitMS: number;
}) {
  const [text, setText] = useState<string>(props.textToRender);

  return (
    <div className="w-full h-full flex flex-col border-2 border-gray-400 rounded-xl p-2">
      <div className="w-full h-full">{text}</div>
      <div className="w-40 h-10 mt-2">
        <TestingButton
          onClick={() => {
            if (props.onButtonClick) {
              props.onButtonClick().then((res) => {
                setText(res);
              });
              setTimeout(() => setText(props.textToRender), props.timeToWaitMS);
            }
          }}
          buttonDefaultText={props.buttonDefaultText}
        />
      </div>
    </div>
  );
}
