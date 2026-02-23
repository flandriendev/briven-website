import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  subject: z.string().min(2),
  message: z.string().min(10),
  ticket: z.string(),
  tag: z.string().optional(),
});

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }

  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: "Email service not configured" },
      { status: 503 }
    );
  }

  const { name, email, company, subject, message, ticket, tag } = parsed.data;

  const tagLabel = tag ? `[${tag.toUpperCase()}]` : "";
  const emailSubject = `${tagLabel} ${ticket} – ${subject}`.trim();

  const { error } = await resend.emails.send({
    from: "Briven <noreply@murphus.eu>",
    to: "noreply@murphus.eu",
    replyTo: email,
    subject: emailSubject,
    text: [
      `Ticket: ${ticket}`,
      tag ? `Tag: ${tag}` : null,
      ``,
      `Name: ${name}`,
      `Email: ${email}`,
      company ? `Company: ${company}` : null,
      `Subject: ${subject}`,
      ``,
      `Message:`,
      message,
    ]
      .filter(Boolean)
      .join("\n"),
  });

  if (error) {
    console.error("Failed to send contact email:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true, ticket });
}
