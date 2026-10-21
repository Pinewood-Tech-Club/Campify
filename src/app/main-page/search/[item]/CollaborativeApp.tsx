"use client";

import { useThreads } from "@liveblocks/react/suspense";
import { Composer, Thread } from "@liveblocks/react-ui";
import { ProfanityFilterResponse } from "@/interfaces/response/ProfanityFilter";

export function CollaborativeApp() {
  const { threads } = useThreads();

  return (
    <div>
      {threads.map((thread) => (
        <Thread
          key={thread.id}
          thread={thread}
          className="mb-4 rounded-lg"
          onSubmit={async (event) => {}}
        />
      ))}

      <Composer
        className={"rounded-lg"}
        onSubmit={async (event) => {
          /*event.preventDefault();
          console.log((event.target as any).textContent);
          const res: ProfanityFilterResponse = await (
            await fetch(`/api/school/filter/ProfanityAPI`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                message: (event.target as any).textContent,
              }),
            })
          ).json();

          console.log(res);

          if (!res.isProfanity) {
            event.preventDefault();
            console.log(event);
          }*/
        }}
      />
    </div>
  );
}
