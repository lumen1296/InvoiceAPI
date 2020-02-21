"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_config_1 = require("@config/inversify.config");
/* REST Controllers */
require("@routes/invoice.controller");
/* Services */
require("@services/createInvoiceService");
inversify_config_1.container.load(inversify_config_1.buildProviderModule());
//# sourceMappingURL=loader.js.map