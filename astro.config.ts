import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";
import critters from "astro-critters";
import { defineConfig } from "astro/config";

export default defineConfig({
	site: "https://windowsdock.app",
	experimental: {
		integrations: true,
	},
	integrations: [sitemap(), critters(), compress()],
});
