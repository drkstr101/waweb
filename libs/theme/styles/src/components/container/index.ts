import styles from "./container.module.css";

const { fixed, narrow, wide } = styles;
const container = { fixed, narrow, wide } as const;

export type ContainerStyles = typeof container;
export default container;
