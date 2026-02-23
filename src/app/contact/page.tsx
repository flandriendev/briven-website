"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Loader2, CheckCircle2, Mail, X } from "lucide-react";
import { toast } from "sonner";
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  company: z.string().min(2, "Company name is required."),
  position: z.string().min(2, "Position is required."),
  subject: z.string().min(2, "Subject is required."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

function generateTicket() {
  const num = Math.floor(1000 + Math.random() * 9000);
  return `BRV-${num}`;
}

function ContactForm() {
  const searchParams = useSearchParams();
  const initialTag = searchParams.get("tag");
  const [tag, setTag] = useState<string | null>(initialTag);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState("");
  const submitContact = useMutation(api.contacts.submit);

  const defaultSubject =
    tag === "sponsor" ? "Company Sponsorship Inquiry" : "";

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      position: "",
      subject: defaultSubject,
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof contactSchema>) {
    const ticket = generateTicket();
    try {
      await submitContact({
        ...values,
        ticket,
        tag: tag || undefined,
      });

      setTicketId(ticket);
      setIsSubmitted(true);
      toast.success("Message sent!");
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  }

  return (
    <AnimatePresence mode="wait">
      {!isSubmitted ? (
        <motion.form
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5"
        >
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">
              Name
            </label>
            <Input
              placeholder="Your name"
              className="h-12 bg-card border-border"
              {...register("name")}
            />
            {errors.name && (
              <p className="text-sm text-destructive mt-1.5">
                {errors.name.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">
              Email
            </label>
            <Input
              type="email"
              placeholder="your@email.com"
              className="h-12 bg-card border-border"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-sm text-destructive mt-1.5">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block text-sm font-medium text-foreground mb-1.5">
                Company
              </label>
              <Input
                placeholder="Your company"
                className="h-12 bg-card border-border"
                {...register("company")}
              />
              {errors.company && (
                <p className="text-sm text-destructive mt-1.5">
                  {errors.company.message}
                </p>
              )}
            </div>
            <div className="w-1/2">
              <label className="block text-sm font-medium text-foreground mb-1.5">
                Position
              </label>
              <Input
                placeholder="Your position"
                className="h-12 bg-card border-border"
                {...register("position")}
              />
              {errors.position && (
                <p className="text-sm text-destructive mt-1.5">
                  {errors.position.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">
              Subject
            </label>
            <div className="relative">
              {tag === "sponsor" && (
                <span className="absolute left-3 top-1/2 -translate-y-1/2 z-10 inline-flex items-center gap-1 px-2 py-1 rounded-full bg-primary/15 text-primary text-sm font-medium border border-primary/25">
                  Sponsor
                  <button
                    type="button"
                    onClick={() => {
                      setTag(null);
                      setValue("subject", "");
                    }}
                    className="hover:bg-primary/20 rounded-full p-0.5 transition-colors"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                </span>
              )}
              <Input
                placeholder="What is this about?"
                className={`h-12 bg-card border-border ${tag === "sponsor" ? "pl-30" : ""}`}
                {...register("subject")}
              />
            </div>
            {errors.subject && (
              <p className="text-sm text-destructive mt-1.5">
                {errors.subject.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">
              Message
            </label>
            <textarea
              placeholder="Tell us about your use case or what you're looking for..."
              className="w-full min-h-[140px] rounded-xl bg-card border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/40 transition-all resize-y"
              {...register("message")}
            />
            {errors.message && (
              <p className="text-sm text-destructive mt-1.5">
                {errors.message.message}
              </p>
            )}
          </div>

          <Button
            type="submit"
            className="h-12 px-8 text-base font-medium"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Mail className="mr-2 h-4 w-4" />
                Send message
              </>
            )}
          </Button>
        </motion.form>
      ) : (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center justify-center text-center py-16 space-y-4"
        >
          <div className="h-14 w-14 bg-primary/20 rounded-full flex items-center justify-center">
            <CheckCircle2 className="h-7 w-7 text-primary" />
          </div>
          <h3 className="text-xl font-semibold text-foreground">
            Message sent!
          </h3>
          <p className="text-muted-foreground text-sm max-w-md">
            Your ticket number is{" "}
            <span className="font-mono font-semibold text-foreground">
              {ticketId}
            </span>
            . We&apos;ll get back to you as soon as possible.
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function ContactPage() {
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
              <span className="text-primary mr-2">⟩</span>Contact
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Interested in a company sponsorship or have questions about Briven?
              Send us a message and we&apos;ll get back to you.
            </p>
          </motion.div>

          <div className="max-w-xl mx-auto">
            <Suspense>
              <ContactForm />
            </Suspense>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
