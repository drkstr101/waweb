import clsx from "clsx";
import Link from "next/link";

const baseStyles = {
  solid:
    "group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2",
  outline:
    "group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none",
};

const variantStyles = {
  solid: {
    neutral:
      "bg-neutral-900 text-white hover:bg-neutral-700 hover:text-neutral-100 active:bg-neutral-800 active:text-neutral-300 focus-visible:outline-neutral-900",
    primary:
      "bg-primary-600 text-white hover:text-neutral-100 hover:bg-primary-500 active:bg-primary-800 active:text-primary-100 focus-visible:outline-primary-600",
    white:
      "bg-white text-neutral-900 hover:bg-primary-50 active:bg-primary-200 active:text-neutral-600 focus-visible:outline-white",
  },
  outline: {
    neutral:
      "ring-neutral-200 text-neutral-700 hover:text-neutral-900 hover:ring-neutral-300 active:bg-neutral-100 active:text-neutral-600 focus-visible:outline-primary-600 focus-visible:ring-neutral-300",
    white:
      "ring-neutral-700 text-white hover:ring-neutral-500 active:ring-neutral-700 active:text-neutral-400 focus-visible:outline-white",
  },
};

export function Button({ variant = "solid", color = "neutral", className, href, ...props }) {
  className = clsx(baseStyles[variant], variantStyles[variant][color], className);

  return href ? (
    <Link href={href} className={className} {...props} />
  ) : (
    <button className={className} {...props} />
  );
}
