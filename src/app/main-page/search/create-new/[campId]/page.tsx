"use client";

import Loading from "@/components/upload-checker/Loading";
import ProgressBar from "@/components/upload-checker/ProgressBar";
import {
  UploadChecker,
  UploadCheckerHead,
  UploadCheckerMainHeaderText,
  UploadCheckerDescHeaderText,
  UploadCheckerMainTextBox,
  UploadCheckerBody,
} from "@/components/upload-checker/UploadChecker";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";

export default function UploadCheck({
  params,
}: {
  params: { campId: string };
}) {
  const { user } = useUser();
  const [isDone, setIsDone] = useState(false);
  const [isProfane, setIsProfane] = useState(false);

  useEffect(() => {
    fetch(`/api/school/filter/camp-filter-and-set-online`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        campId: params.campId,
        userId: user?.id,
      }),
    }).then((res) => {
      if (res.ok) {
        setIsDone(true);
        res.json().then((res) => {
          setIsProfane(res.profane);
        });
      }
    });
  }, [user]);

  return (
    <main className="w-full h-full">
      <UploadChecker>
        <UploadCheckerHead>
          <UploadCheckerMainTextBox>
            <UploadCheckerMainHeaderText>
              Analizing your camp!
            </UploadCheckerMainHeaderText>
            <UploadCheckerDescHeaderText>
              Please wait while we check the camp for profane or inappropriate
              text
            </UploadCheckerDescHeaderText>
          </UploadCheckerMainTextBox>
        </UploadCheckerHead>
        <UploadCheckerBody>
          <div className="w-52 h-52">
            <Loading
              isRequestDone={isDone}
              isRequestValid={!isProfane}
              redirectTo={"/main-page/search"}
            />
          </div>
        </UploadCheckerBody>
      </UploadChecker>
    </main>
  );
}
