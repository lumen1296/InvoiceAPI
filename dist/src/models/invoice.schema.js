"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schemaTypes = mongoose_1.Schema.Types;
const invoiceSchema = new mongoose_1.Schema({
    lastName: {
        type: String
    },
    date: {
        type: String, default: new Date()
    },
    invoiceNumber: {
        type: Number, index: { unique: true }
    },
    net: {
        type: schemaTypes.Decimal128
    },
    tax: {
        type: Number
    },
    total: {
        type: schemaTypes.Decimal128
    },
}, {
    collection: 'invoice'
});
exports.invoiceModel = mongoose_1.model("invoice", invoiceSchema);
//# sourceMappingURL=invoice.schema.js.map