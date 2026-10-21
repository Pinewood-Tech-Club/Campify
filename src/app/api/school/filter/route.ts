import {
  MessageIdentification,
  ProfanityFilterRequest,
  ProfanityFilterType,
} from "@/interfaces/request/ProfanityFilter";
import { ProfanityFilterResponse } from "@/interfaces/response/ProfanityFilter";
import { groq, liveblocks } from "@/internal/core";
import { handleChatGPTFilter, handleProfanityFilter } from "./filter-functions";

export async function POST(request: Request) {
  const json: ProfanityFilterRequest = await request.json();
  let isProfanity = false;

  for (const filter of json.filtersToUse) {
    if (isProfanity) {
      await liveblocks.deleteComment(json.message);
      break;
    }

    switch (filter) {
      case ProfanityFilterType.CHATGPT:
        const groqParsedIntResponse = await handleChatGPTFilter(
          (
            (
              await liveblocks.getComment(json.message)
            ).body?.content[0].children[0] as any
          ).text
        );
        if (groqParsedIntResponse > 70) {
          isProfanity = true;
        }
        break;
      case ProfanityFilterType.PROFANITY_API:
        isProfanity = (
          await handleProfanityFilter(
            (
              (
                await liveblocks.getComment(json.message)
              ).body?.content[0].children[0] as any
            ).text
          )
        ).isProfanity;
        break;
    }
  }

  return Response.json({});
}
