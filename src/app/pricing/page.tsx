"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, ArrowLeft, XCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CheckoutButton from "@/components/CheckoutButton";

const companySponsors = [
  {
    name: "Mavi Finans",
    logo: "/companies/mavi-finans.svg",
    url: "https://mavifinans.com",
    color: "#45b1e8",
  },
];

const tiers = [
  {
    name: "Supporter",
    slug: "supporter" as const,
    price: "€5",
    description: "Support open source development",
    perks: ["Sponsor badge on profile", "Gratitude for your support"],
    buttonVariant: "outline" as const,
  },
  {
    name: "Early Adopter",
    slug: "early-adopter" as const,
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
    slug: "builder" as const,
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
  {
    name: "Company",
    slug: "company" as const,
    price: "Custom",
    description: "Enterprise partnership for teams & orgs",
    perks: [
      "Company logo on website & README",
      "Dedicated support channel",
      "Direct roadmap influence",
      "Custom integration assistance",
    ],
    buttonVariant: "outline" as const,
  },
];

function StatusBanner() {
  const searchParams = useSearchParams();
  const status = searchParams.get("status");

  if (!status) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        className={`mb-8 rounded-2xl border p-5 flex items-start gap-3 ${
          status === "success"
            ? "border-green-500/30 bg-green-500/10"
            : "border-destructive/30 bg-destructive/10"
        }`}
      >
        {status === "success" ? (
          <>
            <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-foreground">
                Payment successful!
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Thank you for sponsoring Briven. You&apos;ll receive a
                confirmation email shortly.
              </p>
            </div>
          </>
        ) : (
          <>
            <XCircle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-foreground">Payment cancelled</p>
              <p className="text-sm text-muted-foreground mt-1">
                No worries — you can try again anytime.
              </p>
            </div>
          </>
        )}
      </motion.div>
    </AnimatePresence>
  );
}

export default function PricingPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-6 pt-20 pb-16">
          {/* Back link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h1 className="text-4xl font-bold tracking-tight text-foreground mb-3">
              <span className="text-primary mr-2">⟩</span>Pricing
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Briven is 100% open-source. Sponsoring helps ensure continuous
              development, security patches, and new features. Pay with card or
              BTC.
            </p>
          </motion.div>

          {/* Status banner */}
          <Suspense>
            <StatusBanner />
          </Suspense>

          {/* Tier cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {tiers.map((tier, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
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
                      {tier.slug !== "company" && (
                        <span className="text-base font-normal text-muted-foreground">
                          /mo
                        </span>
                      )}
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
                          <span className="text-sm text-foreground/80">
                            {perk}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    {tier.slug === "company" ? (
                      <Button
                        asChild
                        className="w-full h-12 transition-all hover:scale-[1.02]"
                        variant={tier.buttonVariant}
                      >
                        <Link href="/contact?tag=sponsor">
                          <Mail className="mr-2 h-4 w-4" />
                          Contact us
                        </Link>
                      </Button>
                    ) : (
                      <CheckoutButton
                        tier={tier.slug}
                        buttonVariant={tier.buttonVariant}
                        highlight={tier.highlight}
                      />
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Company sponsors */}
          {companySponsors.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-12"
            >
              <p className="text-sm text-muted-foreground text-center mb-6">
                Trusted by companies building with Briven
              </p>
              <div className="flex items-center justify-center gap-10 flex-wrap">
                {companySponsors.map((sponsor) => (
                  <motion.a
                    key={sponsor.name}
                    href={sponsor.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative rounded-2xl px-8 py-5 opacity-70 transition-opacity hover:opacity-100"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: `0 0 30px ${sponsor.color}20, 0 0 60px ${sponsor.color}10`,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    style={{ border: `1px solid transparent` }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = `${sponsor.color}30`;
                      (e.currentTarget as HTMLElement).style.backgroundColor = `${sponsor.color}08`;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "transparent";
                      (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                    }}
                  >
                    <Image
                      src={sponsor.logo}
                      alt={sponsor.name}
                      width={140}
                      height={40}
                      className="h-10 w-auto"
                    />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}

          {/* Payment methods note */}
          <p className="text-center text-sm text-muted-foreground mt-8">
            Payments processed securely via CoinGate. Supports credit/debit
            cards and Bitcoin.
          </p>
        </div>
        <Footer />
      </div>
    </>
  );
}
