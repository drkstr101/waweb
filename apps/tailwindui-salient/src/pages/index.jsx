import Head from "next/head";

import { CallToAction } from "@salient/components/CallToAction";
import { Faqs } from "@salient/components/Faqs";
import { Footer } from "@salient/components/Footer";
import { Header } from "@salient/components/Header";
import { Hero } from "@salient/components/Hero";
import { Pricing } from "@salient/components/Pricing";
import { PrimaryFeatures } from "@salient/components/PrimaryFeatures";
import { SecondaryFeatures } from "@salient/components/SecondaryFeatures";
import { Testimonials } from "@salient/components/Testimonials";

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
