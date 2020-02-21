"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
exports.inject = inversify_1.inject;
const inversify_binding_decorators_1 = require("inversify-binding-decorators");
exports.buildProviderModule = inversify_binding_decorators_1.buildProviderModule;
exports.provide = inversify_binding_decorators_1.provide;
const container = new inversify_1.Container();
exports.container = container;
//# sourceMappingURL=inversify.config.js.map