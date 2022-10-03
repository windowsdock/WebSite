import type { AstroUserConfig } from "astro";
import compress from "astro-compress";
import critters from "astro-critters";

import sitemap from "@astrojs/sitemap";

export default {
	site: "https://windowsdock.app",
	integrations: [
		sitemap(),
		critters(),
		compress({
			logger: 1,
		}),
	],
} satisfies AstroUserConfig;
