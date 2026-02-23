"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, Loader2 } from "lucide-react";
import { toast } from "sonner";

type Tier = "supporter" | "early-adopter" | "builder" | "company";

export default function CheckoutButton({
  tier,
  buttonVariant,
  highlight,
}: {
  tier: Tier;
  buttonVariant: "default" | "outline";
  highlight?: boolean;
}) {
  const [loading, setLoading] = useState(false);

  async function handleCheckout() {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tier }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong");
      }

      const { payment_url } = await res.json();
      window.location.href = payment_url;
    } catch (err) {
      toast.error(
        err instanceof Error ? err.message : "Failed to start checkout"
      );
      setLoading(false);
    }
  }

  return (
    <Button
      onClick={handleCheckout}
      disabled={loading}
      className="w-full h-12 transition-all hover:scale-[1.02]"
      variant={buttonVariant}
    >
      {loading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Redirecting...
        </>
      ) : (
        <>
          <Heart
            className={`mr-2 h-4 w-4 ${
              highlight ? "fill-current" : "fill-primary/20 text-primary"
            }`}
          />
          Sponsor
        </>
      )}
    </Button>
  );
}
