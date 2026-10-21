"use client";

import { ReactNode, useEffect } from "react";
import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";
import { client } from "@/app/main-page/search/[item]/liveblocks";
import { ProfanityFilterResponse } from "@/interfaces/response/ProfanityFilter";
import {
  ProfanityFilterRequest,
  ProfanityFilterType,
} from "@/interfaces/request/ProfanityFilter";

export function Room({
  children,
  chat_id,
}: {
  children: ReactNode;
  chat_id: string;
}) {
  useEffect(() => {
    console.log("Effect runs only once per page load");
    client.enterRoom(chat_id);
    const room = client.getRoom(chat_id);

    const unsub = room?.events.comments.subscribe((event) => {
      if (event.type === 402) {
        const request: ProfanityFilterRequest = {
          message: {
            roomId: chat_id,
            threadId: event.threadId,
            commentId: event.commentId,
          },
          filtersToUse: [
            ProfanityFilterType.PROFANITY_API,
            ProfanityFilterType.CHATGPT,
          ],
        };
        console.log(request);
        console.log("Requesting!");
        fetch(`/api/school/filter`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(request),
        }).then((_) => {});
      }
    });

    return () => {
      if (unsub) {
        unsub();
      }
    };
  }, [chat_id]);

  return (
    <LiveblocksProvider
      publicApiKey={
        "pk_prod_Bp7SldOdLpuGgvzJppQt0UyxMyH9wagU5MdIeL6OyqZ3JuyqELI5hIH2hYtw_RrN"
      }
    >
      <RoomProvider id={chat_id}>
        <ClientSideSuspense fallback={<div>Loading…</div>}>
          {children}
        </ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
}
