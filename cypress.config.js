const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    viewportHeight: 1000,
    viewportWidth: 1440,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
