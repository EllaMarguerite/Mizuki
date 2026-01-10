import yaml from "js-yaml";
// Import the YAML file as a raw string so this module is Vite/browser-safe
import siteDetailsRaw from "../data/sitedetails.yml?raw";
import bannerRaw from "../data/banner.yml?raw";
import themeRaw from "../data/theme.yml?raw";

export function loadSiteDetails() {
	const siteDetailsContent = siteDetailsRaw as string;
	return yaml.load(siteDetailsContent) as {
		title: string;
		subtitle: string;
		siteURL: string;
		siteStartDate: string;
	};
}

export function loadTheme() {
	const content = themeRaw as string;
	const parsed = yaml.load(content) as any;

	const theme = parsed?.themeColor;
	if (!theme) {
		throw new Error(
			"src/data/theme.yml must contain a 'themeColor' section with 'hue' and 'fixed'.",
		);
	}
	const hue = theme.hue;
	const fixed = theme.fixed;
	if (typeof hue !== "number" || hue < 0 || hue > 360) {
		throw new Error(
			"src/data/theme.yml: 'themeColor.hue' is required and must be a number between 0 and 360.",
		);
	}
	if (typeof fixed !== "boolean") {
		throw new Error(
			"src/data/theme.yml: 'themeColor.fixed' is required and must be a boolean.",
		);
	}

	return parsed as {
		themeColor: {
			hue: number;
			fixed: boolean;
		};
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
