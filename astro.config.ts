import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";
import critters from "astro-critters";

export default /** @type {import('astro').AstroUserConfig} */ {
	site: "https://windowsdock.app",
	integrations: [sitemap(), critters(), compress()],
};
