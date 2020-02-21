"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const db_1 = require("./db");
const inversify_express_utils_1 = require("inversify-express-utils");
const inversify_config_1 = require("./config/inversify.config");
require("./config/loader");
const server = new inversify_express_utils_1.InversifyExpressServer(inversify_config_1.container, null, { rootPath: "/api" });
server.setConfig(expressApp => {
    expressApp.use(body_parser_1.default.json());
    expressApp.use(cors_1.default());
});
const app = server.build();
const port = process.env.PORT || 4000;
mongoose_1.default.Promise = global.Promise;
mongoose_1.default.connect(db_1.connectionString, { useNewUrlParser: true }).then(
// tslint:disable-next-line: no-console
() => { console.log('Base de datos conectada'); }, 
// tslint:disable-next-line: no-console
err => { console.log(`No se logro conectar a la base de datos ${err}`); });
const httpServer = app.listen(port);
exports = module.exports = app;
//# sourceMappingURL=index.js.map