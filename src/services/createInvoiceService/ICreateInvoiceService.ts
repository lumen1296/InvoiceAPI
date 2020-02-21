import { IResponse } from "src/models/IResponse.model";

export interface ICreateInvoiceService {
    createInvoice(invoice: any): Promise<IResponse>
  }