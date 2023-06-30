import clsx from "clsx";
import Link from "next/link";

function ArrowIcon(props) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m11.5 6.5 3 3.5m0 0-3 3.5m3-3.5h-9"
      />
    </svg>
  );
}

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

export function Button({
  variant = "solid",
  color = "neutral",
  className,
  href,
  arrow,
  children,
  ...props
}) {
  // runtime check variant for now
  if (variant !== "solid" && variant !== "outline") {
    console.warn(`Unknown button variant ${variant} received, defaulting to 'solid'.`);
    variant = "solid";
  }

  // merge css styles
  className = clsx(baseStyles[variant], variantStyles[variant][color], className);

  // declare arrow gfx
  const arrowIcon = (
    <ArrowIcon
      className={clsx(
        "mt-0.5 h-5 w-5",
        variant === "text" && "relative top-px",
        arrow === "left" && "-ml-1 rotate-180",
        arrow === "right" && "-mr-1"
      )}
    />
  );

  // set base component
  const Component = props.href ? Link : "button";

  return (
    <Component className={className} {...props}>
      {arrow === "left" && arrowIcon}
      {children}
      {arrow === "right" && arrowIcon}
    </Component>
  );
}
