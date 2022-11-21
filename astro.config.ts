import compress from "astro-compress";
import critters from "astro-critters";

import sitemap from "@astrojs/sitemap";

/* A function that returns an object. */
export default {
	site: "https://windowsdock.app",
	integrations: [
		sitemap(),
		critters(),
		compress(),
	],
};
