import { v, Validator } from "convex/values";
import { internalMutation, mutation, query } from "./_generated/server";
import { UserJSON } from "@clerk/nextjs/server";

export const upsertFromClerk = internalMutation({
  args: { data: v.any() as Validator<UserJSON> },
  async handler(ctx, { data }) {
    const attrs = {
      name: `${data.first_name} ${data.last_name}`.trim(),
      clerkId: data.id,
    };

    const existing = await ctx.db
      .query("users")
      .withIndex("by_clerk_id", (q) => q.eq("clerkId", data.id))
      .unique();
    if (!existing) await ctx.db.insert("users", attrs);
    else await ctx.db.patch(existing._id, attrs);
  },
});

export const deleteFromClerk = internalMutation({
  args: { clerkUserId: v.string() },
  async handler(ctx, { clerkUserId }) {
    const u = await ctx.db
      .query("users")
      .withIndex("by_clerk_id", (q) => q.eq("clerkId", clerkUserId))
      .unique();
    if (u) await ctx.db.delete(u._id);
  },
});
