import { router, publicProcedure } from "@/server/trpc";

export const appRouter = router({
  userData: publicProcedure.query(() => {
    return { message: "Hello from tRPC!" };
  }),
});

export type AppRouter = typeof appRouter;
