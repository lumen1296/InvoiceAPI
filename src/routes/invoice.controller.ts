import { TYPES } from '@config/types'
import * as express from 'express'
import { inject } from 'inversify'
import {
  controller,
  httpPost,
  interfaces,
  next,
  request,
  response,
} from 'inversify-express-utils'
import joi from 'joi'
import { ICreateInvoiceService } from '@services/ICreateInvoiceService'
import { invoiceRequestSchema } from './invoice.model'
import { IResponse } from '@models/IResponse.model'


@controller('')
export class InvoiceAPIController implements interfaces.Controller {
  constructor(
    @inject(TYPES.ICreateInvoiceService)
    private createInvoiceService: ICreateInvoiceService,
  ) {}

  @httpPost('/createInvoice')
  public async createInvoice(
    @request() req: express.Request,
    @response() res: express.Response,
    @next() nextFunc: express.NextFunction
  ) {
    const data = req.body
    const validationResult = joi.validate(data, invoiceRequestSchema)
    if (validationResult.error) {
      const httpResponse: IResponse = {
        data: '',
        code: 422,
        message: 'invalid_request',
      }

      res.status(422).json(httpResponse)
      nextFunc()
      return
    }

    try {
      const result = await this.createInvoiceService.createInvoice(data)
      const httpResponse: IResponse = {
        data: result.data,
        code: result.code,
        message: result.message
      }
      res.json(httpResponse)
      nextFunc()
      return
    } catch (error) {
      res.status(500).json({ errors: ['internal_server_error'] })
      nextFunc()
      return
    }
  }


}
