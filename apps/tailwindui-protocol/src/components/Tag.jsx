import clsx from "clsx";

const variantStyles = {
  medium: "rounded-lg px-1.5 ring-1 ring-inset",
};

const colorStyles = {
  primary: {
    small: "text-primary-500 dark:text-primary-400",
    medium:
      "ring-primary-300 dark:ring-primary-400/30 bg-primary-400/10 text-primary-500 dark:text-primary-400",
  },
  secondary: {
    small: "text-secondary-500",
    medium:
      "ring-secondary-300 bg-secondary-400/10 text-secondary-500 dark:ring-secondary-400/30 dark:bg-secondary-400/10 dark:text-secondary-400",
  },
  amber: {
    small: "text-amber-500",
    medium:
      "ring-amber-300 bg-amber-400/10 text-amber-500 dark:ring-amber-400/30 dark:bg-amber-400/10 dark:text-amber-400",
  },
  rose: {
    small: "text-red-500 dark:text-rose-500",
    medium:
      "ring-rose-200 bg-rose-50 text-red-500 dark:ring-rose-500/20 dark:bg-rose-400/10 dark:text-rose-400",
  },
  neutral: {
    small: "text-neutral-400 dark:text-neutral-500",
    medium:
      "ring-neutral-200 bg-neutral-50 text-neutral-500 dark:ring-neutral-500/20 dark:bg-neutral-400/10 dark:text-neutral-400",
  },
};

const valueColorMap = {
  get: "primary",
  post: "secondary",
  put: "amber",
  delete: "rose",
};

export function Tag({
  children,
  variant = "medium",
  color = valueColorMap[children.toLowerCase()] ?? "primary",
}) {
  return (
    <span
      className={clsx(
        "font-mono text-[0.625rem] font-semibold leading-6",
        variantStyles[variant],
        colorStyles[color][variant]
      )}
    >
      {children}
    </span>
  );
}
