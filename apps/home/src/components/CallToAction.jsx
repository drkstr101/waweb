import Image from "next/image";

import backgroundImage from "@home/images/background-call-to-action.jpg";
import { Button, Container } from "@watheia/waweb.base-ui";

export function CallToAction() {
  return (
    <section id="get-started-today" className="bg-secondary-600 relative overflow-hidden py-32">
      <Image
        className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        src={backgroundImage}
        alt=""
        width={2347}
        height={1244}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Start your project today
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            It’s time to take control of your site. Buy our software so you can feel like you’re
            doing something productive.
          </p>
          <Button href="/contact" color="white" className="mt-10">
            Get in touch
          </Button>
        </div>
      </Container>
    </section>
  );
}
