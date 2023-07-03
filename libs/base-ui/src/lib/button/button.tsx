import { ButtonColor, ButtonVariant, button as styles } from "@watheia/waweb.theme.styles";
import clsx from "clsx";
import { HtmlHTMLAttributes } from "react";

import Link from "next/link";
import { UrlObject } from "url";

export interface ButtonProps extends HtmlHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  color?: ButtonColor;
  href?: string | UrlObject;
}

export function Button({
  color = "neutral",
  variant = "solid",
  href,
  className,
  ...props
}: ButtonProps) {
  className = clsx(styles[variant], styles[color], className);

  return href ? (
    <Link href={href}>
      <button className={className} {...props} />
    </Link>
  ) : (
    <button className={className} {...props} />
  );
}

export default Button;
