const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'b9ni4x',
  e2e: {
    baseUrl:  'http://qamid.tmweb.ru',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
