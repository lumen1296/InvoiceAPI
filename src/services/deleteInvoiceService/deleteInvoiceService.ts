import { TYPES } from '../../config/types'
import { provide } from 'inversify-binding-decorators'
import { IDeleteInvoiceService } from './IDeleteInvoiceService';
import { invoiceModel } from '../../models/invoice.schema';
import { IResponse } from '../../models/IResponse.model'


@provide(TYPES.IDeleteInvoiceService)
export class DeleteInvoiceService implements IDeleteInvoiceService {

    public async deleteInvoice(id: string) {
        let response: any
        await invoiceModel.findByIdAndRemove({'_id' : id}, (err,offer) => {
            response = {
                data: [],
                code: 200,
                message: 'Invoice deleted'
            } 

        } )
        return response as IResponse

    }
}