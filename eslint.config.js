import config from "@ethang/eslint-config/eslint.config.js";
import tseslint from "typescript-eslint";
import reactConfig from "@ethang/eslint-config/config.react.js";

export default tseslint.config(
    {
        ignores: [],
    },
    ...config,
    ...reactConfig,
    {
        languageOptions: {
            parserOptions: {
                project: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
        rules: {
            "react/naming-convention/component-name": "off",
            "stylistic/jsx-pascal-case": "off",
        },
    },
);