"use client";

import cx from "classnames";
import { TestingButton } from "../../components/testing/TestingButtons";
import { TestingBoxWithText } from "../../components/testing/TestingBoxes";
import { type FormEvent, useRef, useState } from "react";
import { APIEndpointBaseBody } from "@/interfaces/body/APIInterfacesBase";
import { TestResponse } from "@/interfaces/response/TestResponse";

/**
 * @note these are all of the buttons that will appear in the testing page
 */
const APITestingButtons: TestingButton[] = [
  {
    textOnButton: "test one",
    apiDestination: "https://api.liveblocks.io/v2/c/rooms/1/threads?query=",
    bodySent: {
      sentTimes: 0,
      currentTimeMS: new Date().getTime(),
    },
  },
  {
    textOnButton: "test_two",
    apiDestination:
      "wss://api.liveblocks.io/v7?roomId=1&pubkey=pk_prod_Bp7SldOdLpuGgvzJppQt0UyxMyH9wagU5MdIeL6OyqZ3JuyqELI5hIH2hYtw_RrN&version=2.2.1",
    bodySent: {
      sentTimes: 0,
      currentTimeMS: new Date().getTime(),
    },
  },
];

const APITestingTextBoxes: TestingTextBox[] = [
  {
    textOnTextBoxDefault:
      "Click the button to test the wordSimilarityComparison",
    apiDestination: "/api/cogni/test/wordSimilarityComparison",
    bodySent: {
      sentTimes: 0,
      currentTimeMS: new Date().getTime(),
    },
    buttonProps: {
      textOnButton: "Click To Test!",
    },
    timeToWaitMS: 5000,
  },
];

const APITestingUploadImage: TestingUploadImage = {
  apiDestination: "/api/cogni/test/testENV",
  bodySent: {
    sentTimes: 0,
    currentTimeMS: new Date().getTime(),
  },
  buttonProps: {
    textOnButton: "Click To Test env!",
  },
};

type CustomButtonSendBody<T = {}> = T & APIEndpointBaseBody;

interface TestingButtonDefaultProps {
  textOnButton: string;
}

interface TestingButton extends TestingButtonDefaultProps {
  apiDestination: string;
  bodySent: CustomButtonSendBody;
}

interface TestingTextBox {
  textOnTextBoxDefault: string;
  apiDestination: string;
  bodySent: CustomButtonSendBody;
  buttonProps: TestingButtonDefaultProps;
  timeToWaitMS: number;
}

interface TestingUploadImage {
  apiDestination: string;
  bodySent: CustomButtonSendBody;
  buttonProps: TestingButtonDefaultProps;
}

export default function TestPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  async function onButtonClick(
    apiDestination: string,
    bodySent: CustomButtonSendBody
  ) {
    console.log("API Request Sent!");
    const responseRaw = await fetch(
      "https://api.liveblocks.io/v2/c/rooms/1/threads?query=",
      {
        method: "GET",
        headers: {
          Authorization:
            "Bearer pk_prod_Bp7SldOdLpuGgvzJppQt0UyxMyH9wagU5MdIeL6OyqZ3JuyqELI5hIH2hYtw_RrN",
          "Content-Type": "application/json",
        },
      }
    );

    const response = await responseRaw.json();
    console.log(response);
  }

  async function onTextboxButtonClick(
    apiDestination: string,
    bodySent: CustomButtonSendBody
  ): Promise<string> {
    console.log("API Request Sent!");
    const responseRaw: Response = await fetch(apiDestination, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodySent),
    });

    const response: TestResponse = await responseRaw.json();
    return response.testMessage;
  }

  return (
    <main className={cx("w-full h-screen p-2 flex flex-col")}>
      <div className="w-full h-full flex flex-wrap justify-between">
        {APITestingButtons.map((item, index) => {
          return (
            <div className={cx("w-40 h-10 mx-1")} key={index.toString()}>
              <TestingButton
                buttonDefaultText={item.textOnButton}
                onClickTest="Clicked!"
                onClick={() => {
                  onButtonClick(item.apiDestination, item.bodySent);
                }}
              />
            </div>
          );
        })}
      </div>
      <div className="w-full h-full flex flex-wrap">
        {APITestingTextBoxes.map((item, index) => {
          return (
            <div
              className={cx("w-96 h-80", index !== 0 ? "mt-2" : "")}
              key={index.toString()}
            >
              <TestingBoxWithText
                textToRender="Click the button to test the textbox"
                buttonDefaultText={item.buttonProps.textOnButton}
                onButtonClick={async () => {
                  const res = await onTextboxButtonClick(
                    item.apiDestination,
                    item.bodySent
                  );

                  return res;
                }}
                timeToWaitMS={item.timeToWaitMS}
              />
            </div>
          );
        })}
      </div>
      <div className="w-20 h-20 flex">
        <form
          onSubmit={(event: FormEvent) => {
            event.preventDefault();

            if (!selectedFile) {
              alert("Please select a file");
              return;
            }

            const formData = new FormData();
            formData.append("file", selectedFile);

            fetch("/api/testing/upload", {
              method: "POST",
              body: formData,
            }).then((response) => {
              console.log(response);
            });
          }}
        >
          <input
            type="file"
            onChange={(event) => {
              if (event.target.files) {
                setSelectedFile(event.target.files[0]);
              }
            }}
            ref={fileInputRef}
          />
          <TestingButton
            buttonDefaultText="Upload"
            onClickTest="Uploaded!"
            onClick={() => {
              onTextboxButtonClick(APITestingUploadImage.apiDestination, {
                sentTimes: 0,
                currentTimeMS: new Date().getTime(),
              });
            }}
          />
        </form>
      </div>
    </main>
  );
}

/*

// this is how you would add new fields
const bodyTest: CustomButtonSendBody<{ custom: string }> = {
  custom: "test",
  sentTimes: 0,
  currentTimeMS: 0,
};

*/
