import builtins from "builtin-modules";
import json from "rollup-plugin-json";
import executable from "rollup-plugin-executable";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import cleanup from "rollup-plugin-cleanup";
import pkg from "./package.json";

export default {
  input: pkg.module,
  output: {
    file: pkg.main,
    format: "cjs",
    interop: false
  },
  external: ["stream"],
  plugins: [resolve(), commonjs(), cleanup()]
};
