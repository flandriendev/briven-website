import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.formData().catch(() => null);

  if (!body) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  const status = body.get("status");
  const orderId = body.get("id");

  console.log(`[CoinGate Callback] Order ${orderId} → status: ${status}`);

  // Acknowledge the callback
  return NextResponse.json({ received: true });
}
