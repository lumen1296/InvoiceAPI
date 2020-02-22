"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_config_1 = require("./inversify.config");
/* REST Controllers */
require("../routes/invoice.controller");
/* Services */
require("../services/createInvoiceService/createInvoiceService");
require("../services/deleteInvoiceService/deleteInvoiceService");
require("../services/getInvoiceService/getInvoiceService");
require("../services/listInvoiceService/listInvoiceService");
inversify_config_1.container.load(inversify_config_1.buildProviderModule());
//# sourceMappingURL=loader.js.map