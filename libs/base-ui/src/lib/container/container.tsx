import { ContainerVariant, container as styles } from "@watheia/waweb.theme.styles";
import clsx from "clsx";
import { HtmlHTMLAttributes } from "react";

export interface ContainerProps extends HtmlHTMLAttributes<HTMLDivElement> {
  variant?: ContainerVariant;
}

export function Container({ variant = "wide", className, children, ...props }: ContainerProps) {
  return (
    <div className={clsx(styles[variant], className)} {...props}>
      {children}
    </div>
  );
}

export default Container;
