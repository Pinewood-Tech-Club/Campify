import { router, publicProcedure } from "@/server/trpc";

export const appRouter = router({
  hello: publicProcedure.query(() => {
    return { message: "Hello from tRPC!" };
  }),
  hello2: publicProcedure.mutation(() => {
    return { message: "Hello from tRPC!" };
  }),
  // add more procedures here, e.g. publicProcedure.mutation(...)
});

export type AppRouter = typeof appRouter;
