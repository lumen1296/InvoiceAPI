"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
exports.invoiceRequestSchema = joi_1.default
    .object()
    .keys({
    lastName: joi_1.default.string().required(),
    invoiceNumber: joi_1.default.number().required(),
    net: joi_1.default.number().precision(2).strict(),
    tax: joi_1.default.number().required(),
    total: joi_1.default.number().precision(2).strict()
}).required();
//# sourceMappingURL=invoice.model.js.map