import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    clerkId: v.string(),
    name: v.string(),
  }).index("by_clerk_id", ["clerkId"]),
  camps: defineTable({
    id: v.number(),
    userId: v.optional(v.string()), // Clerk user ID
    likes: v.number(),
    comments: v.number(),
    description: v.string(),
    name: v.string(),
    is_public: v.boolean(),
    tags: v.array(v.string()),
    image: v.optional(v.string()),
    short_description: v.optional(v.string()),
  })
    .index("by_user", ["userId"])
    .index("by_public", ["is_public"]),
});
