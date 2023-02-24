module.exports = {
    plugins: ["prettier", "react", "react-hooks", "@typescript-eslint"],
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "standard",
        "prettier",
    ],
    rules: {
        "no-multiple-empty-lines": [2, { max: 1 }],
        "no-use-before-define": [0],
        "@typescript-eslint/no-use-before-define": [1],
        "@typescript-eslint/unbound-method": 2,
        "react/jsx-indent": ["error", 4],
        "react/jsx-indent-props": ["error", 4],
        "react/static-property-placement": ["error", "static public field"],
    },
    env: {
        browser: true,
        es6: true,
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        project: "./tsconfig.json",
        sourceType: "module",
    },
    settings: {
        react: { version: "detect" },
    },
};
