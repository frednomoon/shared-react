import resolve from "rollup-plugin-node-resolve"
import babel from "rollup-plugin-babel"
import commonjs from "rollup-plugin-commonjs"
import sourceMaps from "rollup-plugin-sourcemaps"
import builtins from "rollup-plugin-node-builtins"

const babelrc = require("./.babelrc.js")

/**
 * Returns true for `require` functions that do not use a path.
 * When used in the config this externalises all npm packages that are in use by `mcloud-ui`.
 * \0 is rollup convention for generated in memory modules
 * @param {*} id
 */
const external = id =>
  !id.startsWith("\0") && !id.startsWith(".") && !id.startsWith("/")

export default [
  {
    input: "./src/index.js",
    external,
    plugins: [
      sourceMaps(),
      resolve(),
      babel({
        babelrc: false,
        exclude: "node_modules/**",
        runtimeHelpers: true,
        ...babelrc
      }),
      builtins(),
      commonjs({
        namedExports: {
          "node_modules/react-is/index.js": ["isValidElementType"]
        }
      })
    ],
    output: [
      {
        file: "dist/@frednomoon/shared-react.esm.js",
        exports: "named",
        format: "cjs",
        sourcemap: true
      },
      {
        file: "dist/@frednomoon/shared-react.cjs.js",
        format: "esm",
        sourcemap: true
      }
    ]
  }
]
