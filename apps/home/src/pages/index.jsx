import Head from "next/head";

import { CallToAction } from "@home/components/CallToAction";
import { Faqs } from "@home/components/Faqs";
import { Footer } from "@home/components/Footer";
import { Header } from "@home/components/Header";
import { Hero } from "@home/components/Hero";
import { Pricing } from "@home/components/Pricing";
import { PrimaryFeatures } from "@home/components/PrimaryFeatures";
import { SecondaryFeatures } from "@home/components/SecondaryFeatures";
import { Testimonials } from "@home/components/Testimonials";

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
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <CallToAction />
        <Testimonials />
        <Pricing />
        <Faqs />
      </main>
      <Footer />
    </>
  );
}
