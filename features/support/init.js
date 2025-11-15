import { initConfig, initLogger } from "automation-framework/initFramework";
import config from "../../config/config.js";
import loggerConfig from "../../config/loggerConfig.js";

initConfig(config);
initLogger(loggerConfig);
