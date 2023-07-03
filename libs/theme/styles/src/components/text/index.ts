import styles from "./text.module.css";

export type TextVariant = "lead" | "detail" | "body";

export interface TextTheme {
  readonly lead: string;
  readonly detail: string;
  readonly body: string;
}

export default styles as unknown as TextTheme;
