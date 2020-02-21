import { IResponse } from "src/models/IResponse.model";

export interface IGetInvoiceService {
    getInvoice(invoiceNumber: number, startDate: string, endDate: string): Promise<IResponse>
    }