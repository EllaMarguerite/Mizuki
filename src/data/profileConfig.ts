// Re-export profile metadata from YAML file
// The YAML file is the single source of truth
import profileMeta from "./profileConfig.yml";

export type ProfileMeta = {
	avatar: string;
	name: string;
	bio: string;
	typewriter: {
		enable: boolean;
		speed: number;
	};
	links: Array<{
		name: string;
		icon: string;
		url: string;
	}>;
};

export default profileMeta as ProfileMeta;

