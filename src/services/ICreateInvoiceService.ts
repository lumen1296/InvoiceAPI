
import {InvoiceSchema} from '~/models/invoice.schema'
export interface ICreateInvoiceService {
    createInvoice(invoice: any): Promise<any>
  }