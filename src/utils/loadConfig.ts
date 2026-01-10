import yaml from "js-yaml";
// Import the YAML file as a raw string so this module is Vite/browser-safe
import siteDetailsRaw from "../data/sitedetails.yml?raw";

export function loadSiteDetails() {
	const siteDetailsContent = siteDetailsRaw as string;
	return yaml.load(siteDetailsContent) as {
		title: string;
		subtitle: string;
		siteURL: string;
		siteStartDate: string;
	};
}
