"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import ReactMarkdown from "react-markdown";
import Markdown from "react-markdown";
import {
  CreateArea,
  CreateNew,
  CreateNewBody,
  CreateNewHead,
  CreateNewIsSaved,
  CreateNewName,
  CreateNewSubtitle,
  CreateNewTitle,
  CreateNewTitleText,
  CreateSubtext,
  ImageUploader,
  Line,
  SubmitButton,
} from "@/components/create-new/CreateNew";
import {
  AddMoreOptionsButton,
  Create,
  CreateCard,
  CreateMain,
} from "@/components/create-new/Create";
import { MarkdownEditor } from "@/components/create-new/ReactMarkdownEditor";
import { useUser } from "@clerk/nextjs";
import { SaveCamp } from "@/interfaces/request/SaveCamp";
import { GetEditingCamp } from "@/interfaces/request/GetEditingCamp";
import cx from "classnames";
import { SaveBox } from "@/components/create-new/Save";

async function autoSave(data: SaveCamp) {
  await fetch(`/api/school/db/camp/auto-save`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}

export default function CreateNewPage() {
  const { user } = useUser();
  const [data, setData] = useState<SaveCamp>();
  const [cardPortionVisible, setCardPortionVisible] = useState(false);
  const timeoutId = useRef<NodeJS.Timeout>();
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const body: GetEditingCamp = {
      userId: user?.id ? parseInt(user?.id) : undefined,
    };

    fetch(`/api/school/db/camp/editing-camp`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((r) => r.json())
      .then((r) => setData(r as SaveCamp));
  }, [user]);

  useEffect(() => {
    timeoutId.current = setTimeout(() => {
      data && autoSave(data);
      setIsSaved(true);

      setTimeout(() => setIsSaved(false), 1000);
    }, 1000);
    return () => clearTimeout(timeoutId.current);
  }, [data]);

  return (
    <main>
      <CreateNew>
        <CreateNewHead>
          <CreateNewTitle>
            <CreateNewTitleText>Create a Camp</CreateNewTitleText>
            <CreateNewIsSaved isVisible={isSaved}>Saved!</CreateNewIsSaved>
          </CreateNewTitle>
          <CreateNewSubtitle>
            This is the place to create a new camp.
          </CreateNewSubtitle>
        </CreateNewHead>
        <Line />
        <CreateNewBody>
          <Create>
            <CreateMain>
              <CreateNewName
                defaultText={"Name"}
                maxLength={100}
                setValue={data?.name ?? ""}
                //className={}
                onChange={(e) =>
                  data && setData({ ...data, name: e.target.value })
                }
              />
              <MarkdownEditor
                defaultValue={"Insert a longer description"}
                maxChars={300}
                onTextChange={(e) =>
                  data &&
                  setData({ ...data, description: e.currentTarget.value })
                }
                startingValue={data?.description ?? ""}
              />
            </CreateMain>
            {cardPortionVisible ? (
              <>
                <Line />

                <CreateNewHead>
                  <CreateNewTitleText>
                    Add additional options
                  </CreateNewTitleText>
                  <CreateNewSubtitle>
                    These fields will appear on the camp display card in the
                    "find" menu.
                  </CreateNewSubtitle>
                </CreateNewHead>

                <CreateCard>
                  <CreateMain>
                    <MarkdownEditor
                      defaultValue={
                        "Insert a description that will appear on your card"
                      }
                      maxChars={100}
                      onTextChange={(e) =>
                        data &&
                        setData({
                          ...data,
                          short_description: e.currentTarget.value,
                        })
                      }
                      startingValue={data?.short_description ?? ""}
                    />
                  </CreateMain>
                </CreateCard>

                <ImageUploader
                  campId={data?.id ?? 0}
                  initialImage={data?.image ?? ""}
                />
              </>
            ) : (
              <AddMoreOptionsButton
                onClick={() => {
                  setCardPortionVisible(!cardPortionVisible);
                }}
              >
                Insert Card Options
              </AddMoreOptionsButton>
            )}
          </Create>
        </CreateNewBody>
        <SubmitButton
          link={"create-new/" + data?.id}
          onClick={async () => {
            if (!data) return;
            await autoSave(data);
          }}
        >
          Submit
        </SubmitButton>
      </CreateNew>
    </main>
  );
}
