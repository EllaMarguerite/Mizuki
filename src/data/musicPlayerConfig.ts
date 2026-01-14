// Re-export music player metadata from YAML file
// The YAML file is the single source of truth
import musicPlayerMeta from "./musicPlayerConfig.yml";

export type MusicPlayerMeta = {
	enable: boolean;
	mode: "local" | "meting";
	meting_api: string;
	id: string;
	server: string;
	type: string;
};

export default musicPlayerMeta as MusicPlayerMeta;

