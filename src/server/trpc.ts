import { auth } from "@clerk/nextjs/server";
import { initTRPC } from "@trpc/server";
import { ConvexHttpClient } from "convex/browser";
import superjson from "superjson";

const t = initTRPC
  .context<{
    convex: ConvexHttpClient;
  }>()
  .create({
    transformer: superjson,
  });

export const createTRPCContext = async () => {
  const { getToken } = await auth();
  const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);
  convex.setAuth((await getToken({ template: "convex" })) ?? "");
  return { convex };
};

export const router = t.router;
export const publicProcedure = t.procedure;
