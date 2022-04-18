import { defineConfig } from "astro/config";
import turbolinks from "@astrojs/turbolinks";

export default defineConfig({
	// TODO Place your site URL here
	// site: "",
	integrations: [turbolinks()],
	trailingSlash: "always",
});
