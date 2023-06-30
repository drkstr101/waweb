import Link from "next/link";

import { Container } from "@spotlight/components/Container";

function NavLink({ href, children }) {
  return (
    <Link href={href} className="hover:text-primary-500 dark:hover:text-primary-400 transition">
      {children}
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="mt-32">
      <Container.Outer>
        <div className="border-t border-neutral-100 pb-16 pt-10 dark:border-neutral-700/40">
          <Container.Inner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-neutral-800 dark:text-neutral-200">
                <NavLink href="/about">About</NavLink>
                <NavLink href="/projects">Projects</NavLink>
                <NavLink href="/speaking">Speaking</NavLink>
                <NavLink href="/uses">Uses</NavLink>
              </div>
              <p className="text-sm text-neutral-400 dark:text-neutral-500">
                &copy; {new Date().getFullYear()} Spencer Sharp. All rights reserved.
              </p>
            </div>
          </Container.Inner>
        </div>
      </Container.Outer>
    </footer>
  );
}
