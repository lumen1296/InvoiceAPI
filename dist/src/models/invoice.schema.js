"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
class InvoiceSchema {
    constructor() {
        this.getSchema = new mongoose_1.Mongoose({
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
    }
}
exports.InvoiceSchema = InvoiceSchema;
//# sourceMappingURL=invoice.schema.js.map