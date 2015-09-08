System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "none",
  paths: {
    "*": "src/*",
    "github:*": "jspm_packages/github/*"
  },

  map: {
    "html": "github:herrmanno/html@dev",
    "observer": "github:polymer/observe-js@0.5.6",
    "script": "github:herrmanno/script@dev"
  }
});
