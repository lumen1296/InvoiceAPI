import { TYPES } from '@config/types'
import { inject } from 'inversify'
import { provide } from 'inversify-binding-decorators'
import { ICreateInvoiceService } from '@services/ICreateInvoiceService';


@provide(TYPES.ICreateInvoiceService)
export class CreateInvoiceService implements ICreateInvoiceService {

    public async createInvoice(invoice: any) {

        const invoiceM = new (invoice);

        invoiceM.save().then(() => {
            return { data: [], code: 200, message: `Invoice  # ${invoiceM.invoiceNumber} created` };
        }).catch((err: { name: string; code: number; }) => {
            if (err.name === 'MongoError' && err.code === 11000) return { data: [], code: 200, message: `Invoice already exist` };
        });

    }

}