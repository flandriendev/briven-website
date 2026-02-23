import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import { ConfirmationEmail } from "../../../../emails/ConfirmationEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

const sendSchema = z.object({
  email: z.string().email(),
  name: z.string().optional(),
});

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = sendSchema.safeParse(body);

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

  const { email, name } = parsed.data;

  const { error } = await resend.emails.send({
    from: "Briven <noreply@murphus.eu>",
    to: email,
    subject: "Welcome to Briven Waitlist!",
    react: ConfirmationEmail({ name }),
  });

  if (error) {
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
