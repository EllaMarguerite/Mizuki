import yaml from "js-yaml";
// Import the YAML file as a raw string so this module is Vite/browser-safe
import siteDetailsRaw from "../data/sitedetails.yml?raw";
import bannerRaw from "../data/banner.yml?raw";

export function loadSiteDetails() {
	const siteDetailsContent = siteDetailsRaw as string;
	return yaml.load(siteDetailsContent) as {
		title: string;
		subtitle: string;
		siteURL: string;
		siteStartDate: string;
	};
}

export function loadBanner() {
	const content = bannerRaw as string;
	const parsed = yaml.load(content) as any;

	const home = parsed?.homeText;
	if (!home) {
		throw new Error(
			"src/data/banner.yml must contain a 'homeText' section with 'title' and 'subtitle'.",
		);
	}
	if (typeof home.title !== "string" || home.title.trim() === "") {
		throw new Error(
			"src/data/banner.yml: 'homeText.title' is required and must be a non-empty string.",
		);
	}
	if (
		!home.subtitle ||
		!(Array.isArray(home.subtitle) || typeof home.subtitle === "string")
	) {
		throw new Error(
			"src/data/banner.yml: 'homeText.subtitle' is required and must be a string or an array of strings.",
		);
	}

	return parsed as {
		homeText: {
			enable: boolean;
			title: string;
			subtitle: string[] | string;
			typewriter?: {
				enable?: boolean;
				speed?: number;
				deleteSpeed?: number;
				pauseTime?: number;
			};
		};
	};
}
