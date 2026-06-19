import { After, AfterAll, Before, setDefaultTimeout } from "@cucumber/cucumber";
import { PSWorld } from "./simpleWorld";

setDefaultTimeout(120000);

Before(async function (this: PSWorld) {
  await this.initPlaywright();
});

After(async function (this: PSWorld) {
  await this.closeContext();
});
