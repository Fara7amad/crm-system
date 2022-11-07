import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@pages": path.resolve(__dirname, "./src/pages/index.js"),
			"@hooks": path.resolve(__dirname, "./src/hooks"),
			"@contexts": path.resolve(__dirname, "./src/contexts"),
			"@components": path.resolve(__dirname, "./src/components"),
			"@utils": path.resolve(__dirname, "./src/utils"),
		},
	},
});
