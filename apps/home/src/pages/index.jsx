import Head from "next/head";

import { CtaSection } from "@home/components/CtaSection";
import { Footer } from "@home/components/Footer";
import { Header } from "@home/components/Header";
import { HeroSection } from "@home/components/HeroSection";
import { RecentPostsSection } from "@home/components/RecentPostsSection";
import { ServicesSection } from "@home/components/ServicesSection";
import { SolutionsSection } from "@home/components/SolutionsSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>TaxPal - Accounting made simple for small businesses</title>
        <meta
          name="description"
          content="Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited."
        />
      </Head>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <SolutionsSection />
        <RecentPostsSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
