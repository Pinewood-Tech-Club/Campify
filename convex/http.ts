import { httpRouter } from "convex/server";
import { httpAction } from "./_generated/server";
import { internal } from "./_generated/api";
import { WebhookEvent } from "@clerk/nextjs/server";
import { Webhook } from "svix";

const http = httpRouter();

http.route({
  path: "/clerk-users-webhook",
  method: "POST",
  handler: httpAction(async (ctx, req) => {
    const payload = await req.text();
    const svixHeaders = {
      "svix-id": req.headers.get("svix-id")!,
      "svix-timestamp": req.headers.get("svix-timestamp")!,
      "svix-signature": req.headers.get("svix-signature")!,
    };
    const event = new Webhook(process.env.CLERK_WEBHOOK_SECRET!).verify(
      payload,
      svixHeaders
    ) as WebhookEvent;

    switch (event.type) {
      case "user.created":
      case "user.updated":
        await ctx.runMutation(internal.users.upsertFromClerk, {
          data: event.data,
        });
        break;
      case "user.deleted":
        await ctx.runMutation(internal.users.deleteFromClerk, {
          clerkUserId: event.data.id!,
        });
        break;
    }
    return new Response(null, { status: 200 });
  }),
});
export default http;
