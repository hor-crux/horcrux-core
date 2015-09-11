System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "none",
  paths: {
    "*": "dist/*",
    "github:*": "jspm_packages/github/*"
  },

  map: {
    "html": "github:hor-crux/html@master",
    "observejs": "github:polymer/observe-js@0.5.6"
  }
});
