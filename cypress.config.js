const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "baseUrl" : "https://next.privat24.ua",
    "excludeSpecPattern " : "**/examples/*"
  }
  });
