import clsx from "clsx";
import Link from "next/link";

import { Heading } from "@protocol/components/Heading";

export const a = Link;
export { Button } from "@protocol/components/Button";
export { CodeGroup, Code as code, Pre as pre } from "@protocol/components/Code";

export const h2 = function H2(props) {
  return <Heading level={2} {...props} />;
};

function InfoIcon(props) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" {...props}>
      <circle cx="8" cy="8" r="8" strokeWidth="0" />
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M6.75 7.75h1.5v3.5"
      />
      <circle cx="8" cy="4" r=".5" fill="none" />
    </svg>
  );
}

export function Note({ children }) {
  return (
    <div className="border-primary-500/20 bg-primary-50/50 text-primary-900 dark:border-primary-500/30 dark:bg-primary-500/5 dark:text-primary-200 my-6 flex gap-2.5 rounded-2xl border p-4 leading-6 dark:[--tw-prose-links-hover:theme(colors.primary.300)] dark:[--tw-prose-links:theme(colors.white)]">
      <InfoIcon className="fill-primary-500 dark:fill-primary-200/20 dark:stroke-primary-200 mt-1 h-4 w-4 flex-none stroke-white" />
      <div className="[&>:first-child]:mt-0 [&>:last-child]:mb-0">{children}</div>
    </div>
  );
}

export function Row({ children }) {
  return (
    <div className="grid grid-cols-1 items-start gap-x-16 gap-y-10 xl:max-w-none xl:grid-cols-2">
      {children}
    </div>
  );
}

export function Col({ children, sticky = false }) {
  return (
    <div
      className={clsx(
        "[&>:first-child]:mt-0 [&>:last-child]:mb-0",
        sticky && "xl:sticky xl:top-24"
      )}
    >
      {children}
    </div>
  );
}

export function Properties({ children }) {
  return (
    <div className="my-6">
      <ul className="m-0 max-w-[calc(theme(maxWidth.lg)-theme(spacing.8))] list-none divide-y divide-neutral-900/5 p-0 dark:divide-white/5">
        {children}
      </ul>
    </div>
  );
}

export function Property({ name, type, children }) {
  return (
    <li className="m-0 px-0 py-4 first:pt-0 last:pb-0">
      <dl className="m-0 flex flex-wrap items-center gap-x-3 gap-y-2">
        <dt className="sr-only">Name</dt>
        <dd>
          <code>{name}</code>
        </dd>
        <dt className="sr-only">Type</dt>
        <dd className="font-mono text-xs text-neutral-400 dark:text-neutral-500">{type}</dd>
        <dt className="sr-only">Description</dt>
        <dd className="w-full flex-none [&>:first-child]:mt-0 [&>:last-child]:mb-0">
          {children}
        </dd>
      </dl>
    </li>
  );
}
