// Re-export site metadata from YAML file
// The YAML file is the single source of truth
import siteMeta from "./siteConfig.yml";

export type SiteMeta = {
	title: string;
	subtitle: string;
	siteURL: string;
	siteStartDate: string; // YYYY-MM-DD or ISO
};

export default siteMeta as SiteMeta;

