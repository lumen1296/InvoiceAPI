import { TYPES } from '../config/types'
import * as express from 'express'
import { inject } from 'inversify'
import {
  controller,
  httpGet,
  httpPost,
  httpDelete,
  interfaces,
  next,
  queryParam,
  request,
  response,
} from 'inversify-express-utils'
import joi from 'joi'
import { ICreateInvoiceService } from '../services/createInvoiceService/ICreateInvoiceService'
import { invoiceRequestSchema } from './invoice.model'
import { IResponse } from '../models/IResponse.model'
import { IDeleteInvoiceService } from 'src/services/deleteInvoiceService/IDeleteInvoiceService'
import { IGetInvoiceService } from 'src/services/getInvoiceService/IGetInvoiceService'
import { IListInvoiceService } from 'src/services/listInvoiceService/IListInvoiceService'



@controller('')
export class InvoiceAPIController implements interfaces.Controller {
  constructor(
    @inject(TYPES.ICreateInvoiceService)
    private createInvoiceService: ICreateInvoiceService,
    @inject(TYPES.IDeleteInvoiceService)
    private deleteInvoiceService: IDeleteInvoiceService,
    @inject(TYPES.IGetInvoiceService)
    private getInvoiceService: IGetInvoiceService,
    @inject(TYPES.IListInvoiceService)
    private listInvoiceService: IListInvoiceService,
  ) {}

  @httpPost('/createInvoice')
  public async createInvoice(
    @request() req: express.Request,
    @response() res: express.Response,
    @next() nextFunc: express.NextFunction
  ) {
    const data = req.body
    data.net = Math.round(data.net).toFixed(2);
    data.total = Math.round(data.total).toFixed(2);
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
      if(httpResponse.code===409) res.status(409).json(httpResponse)

      res.status(201).json(httpResponse)
      nextFunc()
      return
    } catch (error) {
      res.status(500).json({ errors: ['internal_server_error'] })
      nextFunc()
      return
    }
  }

  @httpDelete('/deleteInvoice')
  public async deleteInvoice(
    @response() res: express.Response,
    @queryParam("id") id: string,
    @next() nextFunc: express.NextFunction
  ) {
    try {
      console.log(id)
      const result = await this.deleteInvoiceService.deleteInvoice(id)
      const httpResponse: IResponse = {
        data: result.data,
        code: result.code,
        message: result.message
      }
      if(httpResponse.code===409) res.status(409).json(httpResponse)

      res.status(200).json(httpResponse)
      nextFunc()
      return
    } catch (error) {
      res.status(500).json({ errors: ['internal_server_error'] })
      nextFunc()
      return
    }
  }


  @httpGet('/getInvoice')
  public async getInvoice(
    @response() res: express.Response,
    @queryParam("invoiceNumber") invoiceNumber: number,
    @queryParam("startDate") startDate: string,
    @queryParam("endDate") endDate: string,
    @next() nextFunc: express.NextFunction
  ) {
    try {
      const result = await this.getInvoiceService.getInvoice(invoiceNumber, startDate, endDate)
      const httpResponse: IResponse = {
        data: result.data,
        code: result.code,
        message: result.message
      }
      if(httpResponse.code===409) res.status(409).json(httpResponse)
      res.status(200).json(httpResponse)
      nextFunc()
      return
    } catch (error) {
      res.status(500).json({ errors: ['internal_server_error'] })
      nextFunc()
      return
    }
  }

    @httpGet('/listInvoice')
    public async listInvoice(
      @response() res: express.Response,
      @next() nextFunc: express.NextFunction
    ) {
      try {

        const result = await this.listInvoiceService.listInvoice()
        const httpResponse: IResponse = {
          data: result.data,
          code: result.code,
          message: result.message
        }
        res.status(200).json(httpResponse)
      } catch (error) {
        res.status(500).json({ errors: ['internal_server_error'] })
        nextFunc()
        return
      }

  }



}
