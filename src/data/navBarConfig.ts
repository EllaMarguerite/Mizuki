// Re-export navbar metadata from YAML file
// The YAML file is the single source of truth
import navBarMeta from "./navBarConfig.yml";

export type NavBarMeta = {
	text: string;
	icon: string;
	featurePages: {
		anime: boolean;
		diary: boolean;
		friends: boolean;
		projects: boolean;
		skills: boolean;
		timeline: boolean;
		albums: boolean;
		devices: boolean;
	};
};

export default navBarMeta as NavBarMeta;
