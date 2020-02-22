import { IResponse } from "src/models/IResponse.model";

export interface IListInvoiceService {
    listInvoice(): Promise<IResponse>
    }
