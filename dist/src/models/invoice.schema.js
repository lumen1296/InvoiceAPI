"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const invoiceSchema = new mongoose_1.Schema({
    lastName: {
        type: String
    },
    date: {
        date: { type: Date, default: Date.now }
    },
    invoiceNumber: {
        type: Number, index: { unique: true }
    },
    net: {
        type: Number
    },
    tax: {
        type: Number
    },
    total: {
        type: Number
    },
}, {
    collection: 'invoice'
});
exports.invoiceModel = mongoose_1.model("invoice", invoiceSchema);
//# sourceMappingURL=invoice.schema.js.map