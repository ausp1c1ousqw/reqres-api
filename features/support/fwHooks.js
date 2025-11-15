import { apiHooks } from "automation-framework/hooks";
import { Before, BeforeStep, AfterStep, After, BeforeAll } from "@cucumber/cucumber";

Before(async function (scenario) {
  apiHooks.before?.(scenario);
});

BeforeStep(async function (step) {
  const { pickleStep } = step;
  apiHooks.beforeStep?.(pickleStep);
});

AfterStep(async function (stepResult) {
  const { result, pickleStep } = stepResult;
  apiHooks.afterStep?.(pickleStep, result, { error: result.exception });
});

After(async function (scenario) {
  apiHooks.after?.(scenario);
});
