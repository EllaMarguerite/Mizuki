/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,mjs}"],
	darkMode: "class", // allows toggling dark mode manually
	theme: {
		extend: {
			fontFamily: {
				sans: ["Roboto", "sans-serif", ...defaultTheme.fontFamily.sans],
			},
			screens: {
				md: "768px", // 恢复为原默认值：768px，以保持原有导航栏折叠行为
				lg: "1280px", // 保持 lg 为 1280px
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
