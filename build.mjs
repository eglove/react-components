import { projectBuilder } from "@ethang/project-builder/project-builder.js";

await projectBuilder("react-components", "master", {
  isLibrary: true,
  publishDirectory: "dist",
  scripts: ["pnpm up -i --latest", "pnpm lint"],
  tsConfigOverrides: {
    compilerOptions: {
      emitDeclarationOnly: true,
    },
    include: ["src", "!src/**.stories.tsx"],
  },
  tsupOptions: {
    bundle: true,
    entry: ["src", "!src/**.stories.tsx"],
    format: ["esm"],
    minify: true,
    outDir: "dist",
  },
});
