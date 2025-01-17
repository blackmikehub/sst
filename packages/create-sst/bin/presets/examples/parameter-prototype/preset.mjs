import { extend, extract, install } from "create-sst";

export default [
  extend("presets/minimal/typescript-starter"),
  extract(),
  install({
    packages: ["@serverless-stack/node"],
    path: "services",
  }),
];
