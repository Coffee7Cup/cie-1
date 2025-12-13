// import adapter from '@sveltejs/adapter-auto';
import adapter from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: { 
			adapter: adapter(),
			paths: {
				base: "/cie-1"
			},
			prerender: {
				handleUnseenRoutes: "warn"
			}
    },
};

export default config;
