"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Heart } from "lucide-react";
import Link from "next/link";

const tiers = [
  {
    name: "Supporter",
    price: "€5",
    description: "Support open source development",
    perks: ["Sponsor badge on profile", "Gratitude for your support"],
    buttonVariant: "outline" as const,
  },
  {
    name: "Early Adopter",
    price: "€10",
    description: "Fuel the next generation of agents",
    perks: [
      "Sponsor badge on profile",
      "Priority issue triage",
      "Early access updates",
    ],
    buttonVariant: "default" as const,
    highlight: true,
  },
  {
    name: "Builder",
    price: "€25",
    description: "For serious framework users",
    perks: [
      "Sponsor badge on profile",
      "Direct roadmap influence",
      "Logo on GitHub README",
      "Private Discord channel",
    ],
    buttonVariant: "outline" as const,
  },
];

export default function Sponsors() {
  return (
    <section className="w-full flex flex-col items-center">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold tracking-tight mb-3">
          <span className="text-primary mr-2">⟩</span>Sponsors
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Briven is 100% open-source. Sponsoring helps ensure continuous
          development, security patches, and new features.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
        {tiers.map((tier, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="flex"
          >
            <Card
              className={`w-full flex flex-col relative overflow-hidden rounded-2xl transition-colors duration-300 ${
                tier.highlight
                  ? "border-primary/50 shadow-2xl shadow-primary/10"
                  : "border-border"
              }`}
            >
              {tier.highlight && (
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary to-primary/50" />
              )}
              <CardHeader>
                <div className="flex justify-between items-center mb-2">
                  <CardTitle className="text-2xl font-semibold text-foreground">
                    {tier.name}
                  </CardTitle>
                  {tier.highlight && (
                    <Badge
                      variant="default"
                      className="bg-primary/20 text-primary hover:bg-primary/30 border-none"
                    >
                      Popular
                    </Badge>
                  )}
                </div>
                <div className="text-4xl font-bold mt-2 mb-1 text-foreground">
                  {tier.price}
                  <span className="text-base font-normal text-muted-foreground">
                    /mo
                  </span>
                </div>
                <CardDescription className="text-muted-foreground">
                  {tier.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3">
                  {tier.perks.map((perk, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mr-3 mt-0.5" />
                      <span className="text-sm text-foreground/80">{perk}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  asChild
                  className="w-full h-12 transition-all hover:scale-[1.02]"
                  variant={tier.buttonVariant}
                >
                  <Link
                    href="https://github.com/sponsors/flandriendev"
                    target="_blank"
                  >
                    <Heart
                      className={`mr-2 h-4 w-4 ${
                        tier.highlight
                          ? "fill-current"
                          : "fill-primary/20 text-primary"
                      }`}
                    />
                    Sponsor
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
