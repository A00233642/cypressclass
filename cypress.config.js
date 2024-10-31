

const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on("file:preprocessor", browserify.default(config));
  return config;
  
  
}



module.exports = defineConfig({
  env: {
   baseURL: "https://www.demoblaze.com/",
  },


  e2e: {
    setupNodeEvents, //(on, config) {
      specPattern: 'cypress/integration/*.feature', //specify test feature
      defaultCommandTimeout: 8000,
      video: true, //Capture video
      screenshotOnRunFailure: true, // Capture screenshots on failures
      videoCompression: 32,
      videosFolder: 'cypress/videos',
     // specPattern: 'cypress/integration/login/*.js',
     // specPattern: 'cypress/integration/**/*.feature', // This matches all .feature files in subdirectories
      // implement node event listeners here
   // },
  },
  
});
