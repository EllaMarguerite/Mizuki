// Re-export navigation metadata from YAML file
// The YAML file is the single source of truth
import navigationMeta from "./navigationConfig.yml";
import { LinkPreset, type NavBarLink } from "@/types/config";

// Type for YAML link structure
type YamlLink = {
	preset?: string;
	name?: string;
	url?: string;
	icon?: string;
	external?: boolean;
	children?: Array<{
		name: string;
		url: string;
		icon?: string;
		external?: boolean;
	}>;
};

export type NavigationMeta = {
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
	links: YamlLink[];
};

// Convert YAML links to NavBarLink format
function convertLinks(yamlLinks: YamlLink[]): (NavBarLink | LinkPreset)[] {
	return yamlLinks.map((link) => {
		// If it's a preset, return the LinkPreset enum value
		if (link.preset) {
			return LinkPreset[link.preset as keyof typeof LinkPreset];
		}
		// Otherwise, return the custom link object
		return link as NavBarLink;
	});
}

const rawMeta = navigationMeta as NavigationMeta;

export default {
	text: rawMeta.text,
	icon: rawMeta.icon,
	featurePages: rawMeta.featurePages,
	links: convertLinks(rawMeta.links),
};

