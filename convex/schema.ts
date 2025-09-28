import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    name: v.string(),
    email: v.string(),
    provider_id: v.string(),
    profile_url: v.string(),
  }),
  camps: defineTable({
    id: v.number(),
    likes: v.number(),
    comments: v.number(),
    description: v.string(),
    name: v.string(),
    is_public: v.boolean(),
    tags: v.array(v.string()),
    image: v.optional(v.string()),
    short_description: v.optional(v.string()),
  }),
});
