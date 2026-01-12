// Re-export navbar metadata from YAML file
// The YAML file is the single source of truth
import navBarMeta from "./navBarConfig.yml";

export type NavBarMeta = {
	text: string;
	icon: string;
};

export default navBarMeta as NavBarMeta;
