// Re-export banner metadata from YAML file
// The YAML file is the single source of truth
import bannerMeta from "./bannerConfig.yml";

export type BannerMeta = {
	src: {
		desktop: string | string[];
		mobile: string | string[];
	};
	position: "top" | "center" | "bottom";
	carousel: {
		enable: boolean;
		interval: number;
	};
	waves: {
		enable: boolean;
		performanceMode: boolean;
		mobileDisable: boolean;
	};
	imageApi: {
		enable: boolean;
		url: string;
	};
	homeText: {
		enable: boolean;
		title: string;
		subtitle: string[];
		typewriter: {
			enable: boolean;
			speed: number;
			deleteSpeed: number;
			pauseTime: number;
		};
	};
	credit: {
		enable: boolean;
		text: string;
		url: string;
	};
	navbar: {
		transparentMode: "semi" | "full" | "semifull";
	};
};

export default bannerMeta as BannerMeta;

