// Re-export sidebar layout metadata from YAML file
// The YAML file is the single source of truth
import sidebarLayoutMeta from "./sidebarLayoutConfig.yml";

type WidgetComponentType =
	| "profile"
	| "announcement"
	| "categories"
	| "tags"
	| "toc"
	| "music-player"
	| "site-stats"
	| "calendar"
	| "custom";

export type SidebarLayoutMeta = {
	position: "unilateral" | "both";
	components: Array<{
		type: WidgetComponentType;
		enable: boolean;
		order: number;
		position: "top" | "sticky";
		sidebar: "left" | "right";
		class?: string;
		animationDelay?: number;
		responsive?: {
			collapseThreshold?: number;
		};
	}>;
	defaultAnimation: {
		enable: boolean;
		baseDelay: number;
		increment: number;
	};
	responsive: {
		breakpoints: {
			mobile: number;
			tablet: number;
			desktop: number;
		};
		layout: {
			mobile: "hidden" | "bottom" | "drawer" | "sidebar";
			tablet: "sidebar" | "bottom" | "drawer";
			desktop: "sidebar";
		};
	};
};

export default sidebarLayoutMeta as SidebarLayoutMeta;

