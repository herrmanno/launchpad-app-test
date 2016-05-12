System.config({
  defaultJSExtensions: true,
  transpiler: false,
  paths: {
    "npm:*": "jspm_packages/npm/*"
  },

  map: {
    "jquery": "npm:jquery@2.2.3"
  }
});
