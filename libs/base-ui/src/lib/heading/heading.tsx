import { ElementType, HtmlHTMLAttributes } from "react";

/* eslint-disable-next-line */
export interface HeadingProps extends HtmlHTMLAttributes<HTMLElement> {
  level?: number;
}

export function Heading({ level = 1, children, className, ...props }: HeadingProps) {
  const Element = `h${level}` as ElementType;
  return (
    <Element className={className} {...props}>
      {children}
    </Element>
  );
}

export default Heading;
