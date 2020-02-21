"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../config/types");
const express = __importStar(require("express"));
const inversify_1 = require("inversify");
const inversify_express_utils_1 = require("inversify-express-utils");
const joi_1 = __importDefault(require("joi"));
const invoice_model_1 = require("./invoice.model");
let InvoiceAPIController = class InvoiceAPIController {
    constructor(createInvoiceService) {
        this.createInvoiceService = createInvoiceService;
    }
    createInvoice(req, res, nextFunc) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = req.body;
            const validationResult = joi_1.default.validate(data, invoice_model_1.invoiceRequestSchema);
            if (validationResult.error) {
                const httpResponse = {
                    data: '',
                    code: 422,
                    message: 'invalid_request',
                };
                res.status(422).json(httpResponse);
                nextFunc();
                return;
            }
            try {
                const result = yield this.createInvoiceService.createInvoice(data);
                const httpResponse = {
                    data: result.data,
                    code: result.code,
                    message: result.message
                };
                if (httpResponse.code === 409)
                    res.status(409).json(httpResponse);
                res.status(201).json(httpResponse);
                nextFunc();
                return;
            }
            catch (error) {
                res.status(500).json({ errors: ['internal_server_error'] });
                nextFunc();
                return;
            }
        });
    }
};
__decorate([
    inversify_express_utils_1.httpPost('/createInvoice'),
    __param(0, inversify_express_utils_1.request()),
    __param(1, inversify_express_utils_1.response()),
    __param(2, inversify_express_utils_1.next()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Function]),
    __metadata("design:returntype", Promise)
], InvoiceAPIController.prototype, "createInvoice", null);
InvoiceAPIController = __decorate([
    inversify_express_utils_1.controller(''),
    __param(0, inversify_1.inject(types_1.TYPES.ICreateInvoiceService)),
    __metadata("design:paramtypes", [Object])
], InvoiceAPIController);
exports.InvoiceAPIController = InvoiceAPIController;
//# sourceMappingURL=invoice.controller.js.map