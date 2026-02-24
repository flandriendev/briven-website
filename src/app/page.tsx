import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import WhatIsBriven from "@/components/WhatIsBriven";
import QuickStart from "@/components/QuickStart";
import Features from "@/components/Features";
import QuickLinks from "@/components/QuickLinks";
import WaitlistForm from "@/components/WaitlistForm";
import Sponsors from "@/components/Sponsors";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex flex-col items-center overflow-x-hidden">
        <Hero />
        <div className="max-w-[860px] w-full px-6 max-[480px]:px-4 flex flex-col gap-32 py-24">
          <WhatIsBriven />
          <QuickStart />
        </div>
        <Testimonials />
        <div className="max-w-[860px] w-full px-6 max-[480px]:px-4 flex flex-col gap-32 py-24">
          <Features />
          <QuickLinks />
          <WaitlistForm />
          <Sponsors />
        </div>
        <Footer />
      </main>
    </>
  );
}
