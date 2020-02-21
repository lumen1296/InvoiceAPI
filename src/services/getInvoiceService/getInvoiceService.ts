import { TYPES } from '../../config/types'
import { provide } from 'inversify-binding-decorators'
import { IGetInvoiceService } from './IGetInvoiceService';
import { invoiceModel } from '../../models/invoice.schema';
import { IResponse } from '../../models/IResponse.model'


@provide(TYPES.IGetInvoiceService)
export class GetInvoiceService implements IGetInvoiceService {

    public async getInvoice(invoiceNumber: number, startDate: string, endDate: string) {
        let response: any
        if (startDate && endDate) {
        await invoiceModel.find({
            "date":{
              $gte: startDate,
              $lte: endDate
            }
          },(err, res)=>{
            response = {
                data: res,
                code: 200,
                message: 'Ok'
            } 
          })
            return response as IResponse
        }
       
        
    
    if (invoiceNumber) {
        await invoiceModel.find({
            "invoiceNumber":  invoiceNumber
          },(err, res)=>{
            response = {
                data: res,
                code: 200,
                message: 'Ok'
            } 
          })

        return response as IResponse
    }

        response = {
            data: '',
            code: 0,
            message: ''
        } 
        return response as IResponse

}
}