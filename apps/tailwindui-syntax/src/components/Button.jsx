import Link from "next/link";
import clsx from "clsx";

const styles = {
  primary:
    "rounded-full bg-primary-300 py-2 px-4 text-sm font-semibold text-neutral-900 hover:bg-primary-200 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-300/50 active:bg-primary-500",
  secondary:
    "rounded-full bg-neutral-800 py-2 px-4 text-sm font-medium text-white hover:bg-neutral-700 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50 active:text-neutral-400",
};

export function Button({ variant = "primary", className, href, ...props }) {
  className = clsx(styles[variant], className);

  return href ? (
    <Link href={href} className={className} {...props} />
  ) : (
    <button className={className} {...props} />
  );
}
