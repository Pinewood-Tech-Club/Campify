"use client";

import { SearchBox } from "@/components/find/SearchBox";
import { HeaderText } from "@/components/find/TextUtil";
import { Camps, CampWindow } from "@/components/find/CampWindow";
import { sql } from "@/internal/core";
import { useEffect, useState } from "react";
import { GetManyCamps } from "@/interfaces/response/GetManyCamps";
import { Camp } from "@/interfaces/util/Camp";
import {
  CreateNewButton,
  CreateNewButtonLinked,
  EnableRemoveCampsSwitch,
  Find,
} from "@/components/find/Find";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

function startsWithNumber(str: string): boolean {
  return /^[0-9]/.test(str);
}

export default function Profile() {
  const [campData, setCampData] = useState<Camp[] | null>(null);
  const [removeCamps, setRemoveCamps] = useState(true);
  const { data: sessionData } = useSession();

  async function getCampData(): Promise<GetManyCamps> {
    const res = await fetch(`/api/school/db/camp/many`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await res.json();
  }

  useEffect(() => {
    getCampData().then((camp) => {
      if (camp.camps.length == 0) return;
      setCampData(camp.camps);
    });
  }, []);

  return (
    <main className="w-full h-full flex flex-col">
      {!startsWithNumber(sessionData?.user.email ?? "") && (
        <EnableRemoveCampsSwitch
          className="absolute top-2 right-2"
          onClick={function (state: boolean): void {
            if (!sessionData?.user) return;
            setRemoveCamps(state);
          }}
        />
      )}

      <Find>
        <SearchBox
          onCampsUpdate={async function (camps) {
            setCampData(camps == null ? (await getCampData()).camps : camps);
          }}
          getCurrentRenderedCamps={function (): Camp[] | null {
            return campData ?? null;
          }}
        />
        <CreateNewButton>
          <CreateNewButtonLinked linkToGoTo={"/main-page/search/create-new"}>
            <Image
              src={"/icons/create-new.svg"}
              alt={"1"}
              width={50}
              height={50}
              className={"w-16 h-16 transition-transform hover:rotate-90"}
            />
          </CreateNewButtonLinked>
        </CreateNewButton>
      </Find>

      <Camps
        campList={campData ?? []}
        enableRemoving={removeCamps}
        refresh={function (): void {
          getCampData().then((camp) => {
            if (camp.camps.length == 0) return;
            setCampData(camp.camps);
          });
        }}
      />
    </main>
  );
}
