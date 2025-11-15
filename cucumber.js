export default {
  paths: ["features/**/*.feature"],
  import: [
    "./features/support/init.js",
    "./features/support/**/*.js",
    "./features/step-definitions/**/*.js",
  ],
  format: ["summary", "allure-cucumberjs/reporter"],
  formatOptions: {
    resultsDir: "./artifacts/allure-results",
  },
  publishQuiet: true,
};
