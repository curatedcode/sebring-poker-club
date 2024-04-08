import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
	theme: {
		fontFamily: {
			sans: ["Inter", ...defaultTheme.fontFamily.sans],
		},
		extend: {
			screens: {
				micro: "316px",
			},
			colors: {
				"site-red": "#f7240f",
				"site-yellow": "#fbe72b",
				"site-yellow-brighter": "#fae105",
			},
			dropShadow: {
				"charity-logo": "0 0 25px rgba(0, 0, 0, 0.25)",
			},
		},
	},
	future: {
		hoverOnlyWhenSupported: true,
	},
	plugins: [],
};
