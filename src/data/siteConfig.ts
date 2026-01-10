// TypeScript site metadata to avoid YAML import issues during SSR/build.
export type SiteMeta = {
	title: string;
	subtitle: string;
	siteURL: string;
	siteStartDate: string; // YYYY-MM-DD or ISO
};

export const siteMeta: SiteMeta = {
	title: "Mizuki",
	subtitle: "One demo website",
	siteURL: "https://mizuki.mysqil.com/",
	siteStartDate: "2025-01-01",
};

export default siteMeta;
