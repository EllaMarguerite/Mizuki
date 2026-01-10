import yaml from "js-yaml";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export function loadSiteDetails() {
	const siteDetailsPath = join(__dirname, "../data/sitedetails.yml");
	const siteDetailsContent = readFileSync(siteDetailsPath, "utf-8");
	return yaml.load(siteDetailsContent) as {
		title: string;
		subtitle: string;
		siteURL: string;
		siteStartDate: string;
	};
}
