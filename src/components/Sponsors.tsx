"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Mail, Building2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
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
    perks: ["Shoutout in README", "Private Discord channel"],
    buttonVariant: "outline" as const,
  },
  {
    name: "Early Adopter",
    slug: "early-adopter" as const,
    price: "€10",
    description: "Fuel the next generation of agents",
    perks: [
      "Everything in Supporter",
      "Early access to new skills",
      "Priority Discord support",
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
      "Everything in Early Adopter",
      "1 custom skill request/month",
      "2–4 hrs scope per request",
    ],
    buttonVariant: "outline" as const,
  },
  {
    name: "Company",
    slug: "company" as const,
    price: "Custom",
    description:
      "Strategic partnership for teams and organisations deploying Briven agents in production.",
    perks: [
      "Priority support via dedicated private channel",
      "Logo placement on website, README & docs",
      "Early access to pre-release features & builds",
      "Prioritised issue & feature request handling",
      "Request custom features & integrations",
    ],
    buttonVariant: "outline" as const,
  },
];

export default function Sponsors() {
  return (
    <section className="w-full">
      {/* Section header — slide in from left */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h2 className="text-3xl font-semibold tracking-tight mb-3">
          <span className="text-primary mr-2">⟩</span>Sponsors
        </h2>
        <p className="text-muted-foreground max-w-xl">
          Briven is 100% open-source. Sponsoring helps ensure continuous
          development, security patches, and new features.
        </p>
      </motion.div>

      {/* Tier cards — staggered spring entrance */}
      <div className="grid grid-cols-3 gap-4 w-full">
        {tiers.slice(0, 3).map((tier, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: idx * 0.15,
              type: "spring",
              stiffness: 200,
              damping: 20,
            }}
            className="flex"
          >
            <Card
              className={`w-full flex flex-col relative overflow-hidden rounded-2xl transition-colors duration-300 ${tier.highlight
                ? "border-primary/50 shadow-2xl shadow-primary/10"
                : "border-border"
                }`}
            >
              {tier.highlight && (
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary to-primary/50" />
              )}
              <CardHeader className="p-4 pb-2">
                <div className="flex justify-between items-center mb-1">
                  <CardTitle className="text-lg font-semibold text-foreground">
                    {tier.name}
                  </CardTitle>
                  {tier.highlight && (
                    <Badge
                      variant="default"
                      className="bg-primary/20 text-primary hover:bg-primary/30 border-none text-[10px]"
                    >
                      Popular
                    </Badge>
                  )}
                </div>
                <div className="text-2xl font-bold mt-1 mb-0.5 text-foreground">
                  {tier.price}
                  {tier.slug !== "company" && (
                    <span className="text-xs font-normal text-muted-foreground">
                      /mo
                    </span>
                  )}
                </div>
                <CardDescription className="text-xs text-muted-foreground">
                  {tier.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 p-4 pt-2">
                <ul className="space-y-2">
                  {tier.perks.map((perk, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mr-2 mt-0.5" />
                      <span className="text-xs text-foreground/80">{perk}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                {tier.slug === "company" ? (
                  <Button
                    asChild
                    className="w-full h-10 text-sm transition-all hover:scale-[1.02]"
                    variant={tier.buttonVariant}
                  >
                    <Link href="/contact?tag=sponsor">
                      <Mail className="mr-2 h-3.5 w-3.5" />
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

      {/* Company tier — full width, 3 blocks with staggered animations */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="mt-4 w-full"
      >
        <Card className="w-full relative overflow-hidden rounded-2xl transition-colors duration-300 border-border">
          <div className="flex items-stretch">
            {/* Block 1: Title + description — slide from left */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="w-1/4 p-5 flex flex-col justify-center"
            >
              <div className="flex items-center gap-2.5 mb-2">
                <motion.div
                  initial={{ rotate: -20, scale: 0 }}
                  whileInView={{ rotate: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.6,
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                  }}
                >
                  <Building2 className="h-5 w-5 text-primary" />
                </motion.div>
                <span className="text-lg font-semibold text-foreground">
                  {tiers[3].name}
                </span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {tiers[3].description}
              </p>
            </motion.div>

            {/* Block 2: Perks — staggered reveal */}
            <div className="w-2/4 px-8 flex flex-col justify-center">
              <ul className="space-y-1.5">
                {tiers[3].perks.map((perk, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + i * 0.08, duration: 0.3 }}
                    className="flex items-start"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0 mr-2 mt-0.5" />
                    <span className="text-xs text-foreground/80">{perk}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Block 3: CTA button — scale in */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.8,
                type: "spring",
                stiffness: 250,
                damping: 18,
              }}
              className="w-1/4 p-5 flex items-center justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <Button
                  asChild
                  className="h-10 px-6 text-sm"
                  variant="outline"
                >
                  <Link href="/contact?tag=sponsor">
                    <Mail className="mr-2 h-3.5 w-3.5" />
                    Contact us
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </Card>
      </motion.div>

      {/* Company sponsors */}
      {companySponsors.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 w-full"
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
                className="relative rounded-2xl px-4 py-2 opacity-70 transition-opacity hover:opacity-100"
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
                  className="h-20 w-auto"
                />
              </motion.a>
            ))}
          </div>
        </motion.div>
      )}
    </section>
  );
}
