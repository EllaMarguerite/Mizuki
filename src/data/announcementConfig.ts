// Re-export announcement metadata from YAML file
// The YAML file is the single source of truth
import announcementMeta from "./announcementConfig.yml";

export type AnnouncementMeta = {
	title: string;
	content: string;
	closable: boolean;
	link: {
		enable: boolean;
		text: string;
		url: string;
		external: boolean;
	};
};

export default announcementMeta as AnnouncementMeta;

