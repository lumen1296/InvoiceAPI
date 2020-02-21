import { IResponse } from "src/models/IResponse.model";

export interface IDeleteInvoiceService {
  deleteInvoice(invoice: any): Promise<IResponse>
  }