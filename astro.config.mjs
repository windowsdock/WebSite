import { defineConfig } from "astro/config";
import turbolinks from "@astrojs/turbolinks";

export default defineConfig({
	site: "https://windowsdock.app",
	integrations: [turbolinks()],
});
