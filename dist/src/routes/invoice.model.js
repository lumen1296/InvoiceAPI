"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
exports.invoiceRequestSchema = joi_1.default
    .object()
    .keys({
    invoiceNumber: joi_1.default.number().required(),
    net: joi_1.default.number().required(),
    tax: joi_1.default.number().required(),
    total: joi_1.default.number().required()
}).required();
//# sourceMappingURL=invoice.model.js.map