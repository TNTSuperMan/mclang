import { build } from "bun";
build({
    entrypoints: ["./src/index.ts"],
    outdir: "dist",
    format: "esm",
    naming: "esm.js",
    minify: true,
})
build({
    entrypoints: ["./src/index.ts"],
    outdir: "dist",
    format: "cjs",
    naming: "cjs.js",
    minify: true,
})