import { TYPES } from '../../config/types'
import { provide } from 'inversify-binding-decorators'
import { IListInvoiceService } from './IListInvoiceService';
import { invoiceModel } from '../../models/invoice.schema';
import { IResponse } from '../../models/IResponse.model'


@provide(TYPES.IListInvoiceService)
export class ListInvoiceService implements IListInvoiceService {

    public async listInvoice() {
        let response: any
        await invoiceModel.find({}).then((invoices) => {
            response = {
                data: invoices,
                code: 200,
                message: 'Ok'
            } 
            });

            return response as IResponse
        }
       
        
}