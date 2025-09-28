"use client";

import {
  CampItem,
  CampItemChatComponent,
  CampItemContent,
  CampItemDividerLine,
  CampItemHead,
  CampItemHeaderText,
  CampItemTag,
  ChatHeaderNameText,
  ChatItemChatInfo,
  ChatItemEntry,
  ChatItemImage,
  ChatItemProducerInformation,
  ChatMediumNameText,
  HeaderBody,
  HeaderDescriptionText,
  HeaderTagGroup,
  VerticalLine,
} from "@/components/camp-item/CampItem";
import { CampItemChat } from "@/components/camp-item/CampItem";
import Image from "next/image";
import { Room } from "./Room";
import { CollaborativeApp } from "./CollaborativeApp";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Camp } from "@/interfaces/util/Camp";

export default function Item({ params }: { params: { item: string } }) {
  const [campData, setCampData] = useState<Camp | null>(null);

  async function getCampData(id: number): Promise<Camp> {
    const res = await fetch(`/api/school/db/camp/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await res.json();
  }

  useEffect(() => {
    getCampData(parseInt(params.item, 10)).then((camp) => {
      setCampData(camp);
    });
  }, [params.item]);

  return (
    <main className="w-full h-full flex">
      <CampItem>
        <CampItemContent>
          <CampItemHead>
            <CampItemHeaderText>
              {!campData ? " " : campData.name}
            </CampItemHeaderText>
            <HeaderBody className="mt-5">
              <HeaderTagGroup className="mb-1">
                {campData?.tags && campData?.tags.length > 0 ? (
                  campData?.tags.map((tag) => (
                    <CampItemTag key={tag}>{tag}</CampItemTag>
                  ))
                ) : (
                  <></>
                )}
              </HeaderTagGroup>
              <HeaderDescriptionText className="mt-2">
                {!campData ? " " : campData.description}
              </HeaderDescriptionText>
            </HeaderBody>
          </CampItemHead>
        </CampItemContent>
        <VerticalLine />
        <CampItemChatComponent>
          <CampItemChat>
            <Room chat_id={params.item.toString()}>
              <CollaborativeApp />
            </Room>
          </CampItemChat>
        </CampItemChatComponent>
      </CampItem>
    </main>
  );
}

//" kdsnfj ndsjnf jsdjn fjdnsj fndjskn fkansdkljdfn asljknlak jnkjfna skjndf asljknlkfjans lkjn ds kdsnfj ndsjnf jsdjn fjdnsj fndjskn fkansdkljdfn asljknlak jnkjfna skjndf asljknlkfjans lkjn dskdsnfj ndsjnf jsdjn fjdnsj fndjskn fkansdkljdfn asljknlak jnkjfna skjndf asljknlkfjans lkjn dskdsnfj ndsjnf jsdjn fjdnsj fndjskn fkansdkljdfn asljknlak jnkjfna skjndf asljknlkfjans lkjn dskdsnfj ndsjnf jsdjn fjdnsj fndjskn fkansdkljdfn asljknlak jnkjfna skjndf asljknlkfjans lkjn dskdsnfj ndsjnf jsdjn fjdnsj fndjskn fkansdkljdfn asljknlak jnkjfna skjndf asljknlkfjans lkjn dskdsnfj ndsjnf jsdjn fjdnsj fndjskn fkansdkljdfn asljknlak jnkjfna skjndf asljknlkfjans lkjn dskdsnfj ndsjnf jsdjn fjdnsj fndjskn fkansdkljdfn asljknlak jnkjfna skjndf asljknlkfjans lkjn dskdsnfj ndsjnf jsdjn fjdnsj fndjskn fkansdkljdfn asljknlak jnkjfna skjndf asljknlkfjans lkjn dskdsnfj ndsjnf jsdjn fjdnsj fndjskn fkansdkljdfn asljknlak jnkjfna skjndf asljknlkfjans lkjn dskdsnfj ndsjnf jsdjn fjdnsj fndjskn fkansdkljdfn asljknlak jnkjfna skjndf asljknlkfjans lkjn dskdsnfj ndsjnf jsdjn fjdnsj fndjskn fkansdkljdfn asljknlak jnkjfna skjndf asljknlkfjans lkjn dskdsnfj ndsjnf jsdjn fjdnsj fndjskn fkansdkljdfn asljknlak jnkjfna skjndf asljknlkfjans lkjn dskdsnfj ndsjnf jsdjn fjdnsj fndjskn fkansdkljdfn asljknlak jnkjfna skjndf asljknlkfjans lkjn dskdsnfj ndsjnf jsdjn fjdnsj fndjskn fkansdkljdfn asljknlak jnkjfna skjndf asljknlkfjans lkjn dskdsnfj ndsjnf jsdjn fjdnsj fndjskn fkansdkljdfn asljknlak jnkjfna skjndf asljknlkfjans lkjn dskdsnfj ndsjnf jsdjn fjdnsj fndjskn fkansdkljdfn asljknlak jnkjfna skjndf asljknlkfjans lkjn dskdsnfj ndsjnf jsdjn fjdnsj fndjskn fkansdkljdfn asljknlak jnkjfna skjndf asljknlkfjans lkjn dskdsnfj ndsjnf jsdjn fjdnsj fndjskn fkansdkljdfn asljknlak jnkjfna skjndf asljknlkfjans lkjn dskdsnfj ndsjnf jsdjn fjdnsj fndjskn fkansdkljdfn asljknlak jnkjfna skjndf asljknlkfjans lkjn dskdsnfj ndsjnf jsdjn fjdnsj fndjskn fkansdkljdfn asljknlak jnkjfna skjndf asljknlkfjans lkjn dskdsnfj ndsjnf jsdjn fjdnsj fndjskn fkansdkljdfn asljknlak jnkjfna skjndf asljknlkfjans lkjn dskdsnfj ndsjnf jsdjn fjdnsj fndjskn fkansdkljdfn asljknlak jnkjfna skjndf asljknlkfjans lkjn dskdsnfj ndsjnf jsdjn fjdnsj fndjskn fkansdkljdfn asljknlak jnkjfna skjndf asljknlkfjans lkjn dskdsnfj ndsjnf jsdjn fjdnsj fndjskn fkansdkljdfn asljknlak jnkjfna skjndf asljknlkfjans lkjn dskdsnfj ndsjnf jsdjn fjdnsj fndjskn fkansdkljdfn asljknlak jnkjfna skjndf asljknlkfjans lkjn dskdsnfj ndsjnf jsdjn fjdnsj fndjskn fkansdkljdfn asljknlak jnkjfna skjndf asljknlkfjans lkjn dskdsnfj ndsjnf jsdjn fjdnsj fndjskn fkansdkljdfn asljknlak jnkjfna skjndf asljknlkfjans lkjn dskdsnfj ndsjnf jsdjn fjdnsj fndjskn fkansdkljdfn asljknlak jnkjfna skjndf asljknlkfjans lkjn dskdsnfj ndsjnf jsdjn fjdnsj fndjskn fkansdkljdfn asljknlak jnkjfna skjndf asljknlkfjans lkjn dskdsnfj ndsjnf jsdjn fjdnsj fndjskn fkansdkljdfn asljknlak jnkjfna skjndf asljknlkfjans lkjn dskdsnfj ndsjnf jsdjn fjdnsj fndjskn fkansdkljdfn asljknlak jnkjfna skjndf asljknlkfjans lkjn dskdsnfj ndsjnf jsdjn fjdnsj fndjskn fkansdkljdfn asljknlak jnkjfna skjndf asljknlkfjans lkjn dskdsnfj ndsjnf jsdjn fjdnsj fndjskn fkansdkljdfn asljknlak jnkjfna skjndf asljknlkfjans lkjn dskdsnfj ndsjnf jsdjn fjdnsj fndjskn fkansdkljdfn asljknlak jnkjfna skjndf asljknlkfjans lkjn dskdsnfj ndsjnf jsdjn fjdnsj fndjskn fkansdkljdfn asljknlak jnkjfna skjndf asljknlkfjans lkjn dskdsnfj ndsjnf jsdjn fjdnsj fndjskn fkansdkljdfn asljknlak jnkjfna skjndf asljknlkfjans lkjn dskdsnfj ndsjnf jsdjn fjdnsj fndjskn fkansdkljdfn asljknlak jnkjfna skjndf asljknlkfjans lkjn dskdsnfj ndsjnf jsdjn fjdnsj fndjskn fkansdkljdfn asljknlak jnkjfna skjndf asljknlkfjans lkjn dskdsnfj ndsjnf jsdjn fjdnsj fndjskn fkansdkljdfn asljknlak jnkjfna skjndf asljknlkfjans lkjn dskdsnfj ndsjnf jsdjn fjdnsj fndjskn fkansdkljdfn asljknlak jnkjfna skjndf asljknlkfjans lkjn dskdsnfj ndsjnf jsdjn fjdnsj fndjskn fkansdkljdfn asljknlak jnkjfna skjndf asljknlkfjans lkjn dskdsnfj ndsjnf jsdjn fjdnsj fndjskn fkansdkljdfn asljknlak jnkjfna skjndf asljknlkfjans lkjn dskdsnfj ndsjnf jsdjn fjdnsj fndjskn fkansdkljdfn asljknlak jnkjfna skjndf asljknlkfjans lkjn dskdsnfj ndsjnf jsdjn fjdnsj fndjskn fkansdkljdfn asljknlak jnkjfna skjndf asljknlkfjans lkjn dskdsnfj ndsjnf jsdjn fjdnsj fndjskn fkansdkljdfn asljknlak jnkjfna skjndf asljknlkfjans lkjn dskdsnfj ndsjnf jsdjn fjdnsj fndjskn fkansdkljdfn asljknlak jnkjfna skjndf asljknlkfjans lkjn dskdsnfj ndsjnf jsdjn fjdnsj fndjskn fkansdkljdfn asljknlak jnkjfna skjndf asljknlkfjans lkjn dskdsnfj ndsjnf jsdjn fjdnsj fndjskn fkansdkljdfn asljknlak jnkjfna skjndf asljknlkfjans lkjn dskdsnfj ndsjnf jsdjn fjdnsj fndjskn fkansdkljdfn asljknlak jnkjfna skjndf asljknlkfjans lkjn dskdsnfj ndsjnf jsdjn fjdnsj fndjskn fkansdkljdfn asljknlak jnkjfna skjndf asljknlkfjans lkjn dskdsnfj ndsjnf jsdjn fjdnsj fndjskn fkansdkljdfn asljknlak jnkjfna skjndf asljknlkfjans lkjn dskdsnfj ndsjnf jsdjn fjdnsj fndjskn fkansdkljdfn asljknlak jnkjfna skjndf asljknlkfjans lkjn dskdsnfj ndsjnf jsdjn fjdnsj fndjskn fkansdkljdfn asljknlak jnkjfna skjndf asljknlkfjans lkjn dskdsnfj ndsjnf jsdjn fjdnsj fndjskn fkansdkljdfn asljknlak jnkjfna skjndf asljknlkfjans lkjn dskdsnfj ndsjnf jsdjn fjdnsj fndjskn fkansdkljdfn asljknlak jnkjfna skjndf asljknlkfjans lkjn dskdsnfj ndsjnf jsdjn fjdnsj fndjskn fkansdkljdfn asljknlak jnkjfna skjndf asljknlkfjans lkjn dskdsnfj ndsjnf jsdjn fjdnsj fndjskn fkansdkljdfn asljknlak jnkjfna skjndf asljknlkfjans lkjn dskdsnfj ndsjnf jsdjn fjdnsj fndjskn fkansdkljdfn asljknlak jnkjfna skjndf asljknlkfjans lkjn dskdsnfj ndsjnf jsdjn fjdnsj fndjskn fkansdkljdfn asljknlak jnkjfna skjndf asljknlkfjans lkjn dskdsnfj ndsjnf jsdjn fjdnsj fndjskn fkansdkljdfn asljknlak jnkjfna skjndf asljknlkfjans lkjn dskdsnfj ndsjnf jsdjn fjdnsj fndjskn fkansdkljdfn asljknlak jnkjfna skjndf asljknlkfjans lkjn dskdsnfj ndsjnf jsdjn fjdnsj fndjskn fkansdkljdfn asljknlak jnkjfna skjndf asljknlkfjans lkjn dskdsnfj ndsjnf jsdjn fjdnsj fndjskn fkansdkljdfn asljknlak jnkjfna skjndf asljknlkfjans lkjn dskdsnfj ndsjnf jsdjn fjdnsj fndjskn fkansdkljdfn asljknlak jnkjfna skjndf asljknlkfjans lkjn dskdsnfj ndsjnf jsdjn fjdnsj fndjskn fkansdkljdfn asljknlak jnkjfna skjndf asljknlkfjans lkjn dskdsnfj ndsjnf jsdjn fjdnsj fndjskn fkansdkljdfn asljknlak jnkjfna skjndf asljknlkfjans lkjn dskdsnfj ndsjnf jsdjn fjdnsj fndjskn fkansdkljdfn asljknlak jnkjfna skjndf asljknlkfjans lkjn dskdsnfj ndsjnf jsdjn fjdnsj fndjskn fkansdkljdfn asljknlak jnkjfna skjndf asljknlkfjans lkjn dskdsnfj ndsjnf jsdjn fjdnsj fndjskn fkansdkljdfn asljknlak jnkjfna skjndf asljknlkfjans lkjn dskdsnfj ndsjnf jsdjn fjdnsj fndjskn fkansdkljdfn asljknlak jnkjfna skjndf asljknlkfjans lkjn dskdsnfj ndsjnf jsdjn fjdnsj fndjskn fkansdkljdfn asljknlak jnkjfna skjndf asljknlkfjans lkjn ds"
