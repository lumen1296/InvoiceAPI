"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../config/types");
const inversify_binding_decorators_1 = require("inversify-binding-decorators");
const invoice_schema_1 = require("../models/invoice.schema");
let CreateInvoiceService = class CreateInvoiceService {
    createInvoice(invoice) {
        return __awaiter(this, void 0, void 0, function* () {
            let response;
            const invoiceM = new invoice_schema_1.invoiceModel(invoice);
            yield invoiceM.save().then(() => {
                response = {
                    data: '',
                    code: 200,
                    message: 'Invoice created',
                };
            }).catch((err) => {
                if (err.name === 'MongoError' && err.code === 11000) {
                    response = {
                        data: [],
                        code: 409,
                        message: 'Invoice already exist'
                    };
                }
                else {
                    response = {
                        data: [],
                        code: '',
                        message: err
                    };
                }
            });
            return response;
        });
    }
};
CreateInvoiceService = __decorate([
    inversify_binding_decorators_1.provide(types_1.TYPES.ICreateInvoiceService)
], CreateInvoiceService);
exports.CreateInvoiceService = CreateInvoiceService;
//# sourceMappingURL=createInvoiceService.js.map