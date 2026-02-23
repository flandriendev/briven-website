import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  waitlist: defineTable({
    email: v.string(),
    name: v.optional(v.string()),
    createdAt: v.optional(v.number()),
    joinedAt: v.optional(v.number()),
  }).index("by_email", ["email"]),
});
