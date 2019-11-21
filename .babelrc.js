const { BABEL_ENV, NODE_ENV, BUILD_ENV } = process.env

const presets = [
  "@babel/preset-react",
  [
    "@babel/preset-env",
    {
      loose: BABEL_ENV !== "DEMO",
      modules: BABEL_ENV === "cjs" || NODE_ENV === "test" ? "commonjs" : false
    }
  ]
]

const plugins = [
  "@babel/plugin-proposal-optional-chaining",
  [
    "babel-plugin-styled-components",
    {
      displayName: BUILD_ENV === "demo"
    }
  ],
  [
    "@babel/plugin-transform-runtime",
    {
      corejs: false,
      helpers: false,
      regenerator: true,
      useESModules: false
    }
  ],
  "@babel/plugin-proposal-class-properties"
].filter(Boolean)

module.exports = {
  presets,
  plugins
}
