import { defineConfig } from "tsup";

export default defineConfig({
	entry: ["src/index.ts"],
	splitting: false,
	treeshake: true,
	sourcemap: true,
	clean: true,
	format: ["cjs", "esm"],
	external: ["react"],
	dts: true,
});