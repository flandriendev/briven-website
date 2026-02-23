import { mutation, internalAction } from "./_generated/server";
import { v } from "convex/values";
import { Resend } from "resend";
import { internal } from "./_generated/api";

export const submit = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    company: v.string(),
    position: v.string(),
    subject: v.string(),
    message: v.string(),
    ticket: v.string(),
    tag: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const contactId = await ctx.db.insert("contacts", {
      ...args,
      createdAt: Date.now(),
    });

    await ctx.scheduler.runAfter(0, internal.contacts.sendNotificationEmail, {
      name: args.name,
      email: args.email,
      company: args.company,
      position: args.position,
      subject: args.subject,
      message: args.message,
      ticket: args.ticket,
      tag: args.tag,
    });

    return contactId;
  },
});

export const sendNotificationEmail = internalAction({
  args: {
    name: v.string(),
    email: v.string(),
    company: v.string(),
    position: v.string(),
    subject: v.string(),
    message: v.string(),
    ticket: v.string(),
    tag: v.optional(v.string()),
  },
  handler: async (_ctx, args) => {
    if (!process.env.RESEND_API_KEY) {
      console.warn("RESEND_API_KEY not set. Skipping email send.");
      return;
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const tagLabel = args.tag ? `[${args.tag.toUpperCase()}]` : "";
    const emailSubject = `${tagLabel} ${args.ticket} – ${args.subject}`.trim();

    await resend.emails.send({
      from: "Briven <noreply@murphus.eu>",
      to: "noreply@murphus.eu",
      replyTo: args.email,
      subject: emailSubject,
      text: [
        `Ticket: ${args.ticket}`,
        args.tag ? `Tag: ${args.tag}` : null,
        ``,
        `Name: ${args.name}`,
        `Email: ${args.email}`,
        args.company ? `Company: ${args.company}` : null,
        args.position ? `Position: ${args.position}` : null,
        `Subject: ${args.subject}`,
        ``,
        `Message:`,
        args.message,
      ]
        .filter(Boolean)
        .join("\n"),
    });
  },
});
