module.exports = {
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: "module",
    },
    env: {
        browser: true,
        es2021: true,
    },
    "scripts": {
        "build": "DISABLE_ESLINT=true react-scripts build"
    },
    extends: ["eslint:recommended", "plugin:react/recommended"],
    plugins: ["react", "react-hooks"],
    rules: {
        // Add your custom ESLint rules here, if needed
    },
};
