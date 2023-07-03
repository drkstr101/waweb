import styles from "./button.module.css";

export type ButtonColor = "primary" | "neutral" | "white";
export type ButtonVariant = "solid" | "outline" | "clear";
export interface ButtonTheme {
  readonly solid: string;
  readonly outline: string;
  readonly clear: string;
  readonly primary: string;
  readonly neutral: string;
  readonly white: string;
}

export default styles as unknown as ButtonTheme;
