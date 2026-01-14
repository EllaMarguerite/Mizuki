// Re-export TOC metadata from YAML file
// The YAML file is the single source of truth
import tocMeta from "./tocConfig.yml";

export type TocMeta = {
	enable: boolean;
	mode: "float" | "sidebar";
	depth: 1 | 2 | 3;
	useJapaneseBadge: boolean;
};

export default tocMeta as TocMeta;

