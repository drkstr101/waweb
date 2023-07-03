import styles from "./heading.module.css";

export type HeadingVariant =
  | "title"
  | "subtitle"
  | "heading1"
  | "heading2"
  | "heading3"
  | "label";

export interface HeadingTheme {
  readonly title: string;
  readonly subtitle: string;
  readonly heading1: string;
  readonly heading2: string;
  readonly heading3: string;
  readonly label: string;
}

export default styles as unknown as HeadingTheme;
