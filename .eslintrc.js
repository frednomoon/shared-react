module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parser: "babel-eslint",
  plugins: ["react"],
  rules: {
    semi: [2, "never"],
    "react/prop-types": 0
  }
}
