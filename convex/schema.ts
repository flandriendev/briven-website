import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  waitlist: defineTable({
    email: v.string(),
    name: v.optional(v.string()),
    createdAt: v.optional(v.number()),
    joinedAt: v.optional(v.number()),
  }).index("by_email", ["email"]),

  contacts: defineTable({
    name: v.string(),
    email: v.string(),
    company: v.string(),
    position: v.string(),
    subject: v.string(),
    message: v.string(),
    ticket: v.string(),
    tag: v.optional(v.string()),
    createdAt: v.number(),
  })
    .index("by_ticket", ["ticket"])
    .index("by_email", ["email"]),
});
