// Re-export fullscreen wallpaper metadata from YAML file
// The YAML file is the single source of truth
import fullscreenWallpaperMeta from "./fullscreenWallpaperConfig.yml";

export type FullscreenWallpaperMeta = {
	src: {
		desktop: string | string[];
		mobile: string | string[];
	};
	position: "top" | "center" | "bottom";
	carousel: {
		enable: boolean;
		interval: number;
	};
	zIndex: number;
	opacity: number;
	blur: number;
};

export default fullscreenWallpaperMeta as FullscreenWallpaperMeta;

