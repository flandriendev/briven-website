import { mutation, internalAction } from "./_generated/server";
import { v } from "convex/values";
import { Resend } from "resend";
import { ConfirmationEmail } from "../emails/ConfirmationEmail";
import { ReactElement } from "react";
import { internal } from "./_generated/api";

export const join = mutation({
  args: {
    email: v.string(),
    name: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const existing = await ctx.db
      .query("waitlist")
      .withIndex("by_email", (q) => q.eq("email", args.email))
      .first();

    if (existing) {
      throw new Error("Already on the waitlist");
    }

    const waitlistId = await ctx.db.insert("waitlist", {
      email: args.email,
      name: args.name,
      createdAt: Date.now(),
    });

    await ctx.scheduler.runAfter(0, internal.waitlist.sendConfirmationEmail, {
      email: args.email,
      name: args.name,
    });

    return waitlistId;
  },
});

export const sendConfirmationEmail = internalAction({
  args: {
    email: v.string(),
    name: v.optional(v.string()),
  },
  handler: async (_ctx, args) => {
    if (!process.env.RESEND_API_KEY) {
      console.warn("RESEND_API_KEY not set. Skipping email send.");
      return;
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "Briven <noreply@briven.ai>",
      to: args.email,
      subject: "Welcome to Briven Waitlist!",
      react: ConfirmationEmail({ name: args.name }) as ReactElement,
    });
  },
});
