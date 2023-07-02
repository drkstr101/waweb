import styles from "./container.module.css";

const { fixed, narrow, wide } = styles;
const container = { fixed, narrow, wide } as const;

export type ContainerVariant = "fixed" | "narrow" | "wide";
export type ContainerTheme = typeof container;

export default container as ContainerTheme;
