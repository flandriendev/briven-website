import { NextResponse } from "next/server";
import { z } from "zod";

const tierPrices: Record<string, { amount: number; title: string }> = {
  supporter: { amount: 5, title: "Briven Supporter Sponsorship" },
  "early-adopter": { amount: 10, title: "Briven Early Adopter Sponsorship" },
  builder: { amount: 25, title: "Briven Builder Sponsorship" },
  company: { amount: 100, title: "Briven Company Sponsorship" },
};

const checkoutSchema = z.object({
  tier: z.enum(["supporter", "early-adopter", "builder", "company"]),
});

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = checkoutSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid tier. Must be supporter, early-adopter, or builder." },
      { status: 400 }
    );
  }

  const token = process.env.COINGATE_API_TOKEN;
  if (!token) {
    return NextResponse.json(
      { error: "Payment service not configured" },
      { status: 503 }
    );
  }

  const baseUrl =
    process.env.COINGATE_ENVIRONMENT === "production"
      ? "https://api.coingate.com/v2"
      : "https://api-sandbox.coingate.com/v2";

  const appUrl = process.env.NEXT_PUBLIC_APP_URL || "https://briven.ai";
  const { tier } = parsed.data;
  const { amount, title } = tierPrices[tier];

  const res = await fetch(`${baseUrl}/orders`, {
    method: "POST",
    headers: {
      Authorization: `Token ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      price_amount: amount,
      price_currency: "EUR",
      receive_currency: "DO_NOT_CONVERT",
      title,
      description: `Monthly sponsorship – ${title}`,
      callback_url: `${appUrl}/api/checkout/callback`,
      success_url: `${appUrl}/pricing?status=success`,
      cancel_url: `${appUrl}/pricing?status=cancelled`,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    console.error("CoinGate order creation failed:", err);
    return NextResponse.json(
      { error: "Failed to create payment order" },
      { status: 502 }
    );
  }

  const order = await res.json();

  return NextResponse.json({ payment_url: order.payment_url });
}
