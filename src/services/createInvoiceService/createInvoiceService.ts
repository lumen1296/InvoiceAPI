import { TYPES } from '../../config/types'
import { provide } from 'inversify-binding-decorators'
import { ICreateInvoiceService } from './ICreateInvoiceService';
import { invoiceModel } from '../../models/invoice.schema';
import { IResponse } from '../../models/IResponse.model'


@provide(TYPES.ICreateInvoiceService)
export class CreateInvoiceService implements ICreateInvoiceService {

    public async createInvoice(invoice: any) {
        let response: any
        const invoiceM = new invoiceModel(invoice)
        await invoiceM.save().then(() => {
            response = {
                data: '',
                code: 201,
                message: 'Invoice created',
            }

        }).catch((err: { name: string; code: number; }) => {
            if (err.name === 'MongoError' && err.code === 11000) {
                response = {
                    data: [],
                    code: 409,
                    message: 'Invoice already exist'
                }
            }
            else{
            response = {
                data: [],
                code: '',
                message: err
            }}
        })

        return response as IResponse

    }
}