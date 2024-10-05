import { projectBuilder } from "@ethang/project-builder/project-builder.js";

await projectBuilder("react-components", "master", {
  isLibrary: true,
  publishDirectory: "dist",
  scripts: ["pnpm up -i --latest", "pnpm lint"],
  tsConfigOverrides: {
    compilerOptions: {
      emitDeclarationOnly: true,
    },
    exclude: ["**/*.stories.tsx", "src/index.css"],
  },
  tsupOptions: {
    bundle: true,
    entry: ["src", "!**/*.stories.tsx"],
    format: ["esm"],
    minify: true,
    outDir: "dist",
  },
});
