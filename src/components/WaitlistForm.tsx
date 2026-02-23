"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { toast } from "sonner";
import { Loader2, CheckCircle2 } from "lucide-react";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address."),
});

export default function WaitlistForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const joinWaitlist = useMutation(api.waitlist.join);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { email: "" },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await joinWaitlist({ email: values.email });
      setIsSubmitted(true);
      toast.success("You're on the list!");
    } catch {
      toast.error(
        "You might already be on the waitlist, or something went wrong."
      );
    }
  }

  return (
    <section className="w-full">
      <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-semibold tracking-tight mb-3">
            <span className="text-primary mr-2">⟩</span>Stay in the Loop
          </h2>
          <p className="text-muted-foreground mb-8">
            Get updates on new features, integrations, and framework news. No
            spam, unsubscribe anytime.
          </p>

          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
              >
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
                >
                  <div className="flex-1">
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      className="h-12 bg-background border-border"
                      {...register("email")}
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive mt-1.5">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  <Button
                    type="submit"
                    className="h-12 px-8 text-base font-medium shrink-0"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Subscribing...
                      </>
                    ) : (
                      <>
                        Subscribe
                        <span className="ml-1">→</span>
                      </>
                    )}
                  </Button>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-4 space-y-4"
              >
                <div className="h-14 w-14 bg-primary/20 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  You&apos;re in!
                </h3>
                <p className="text-muted-foreground text-sm">
                  Keep an eye on your inbox for updates and early access invites.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
