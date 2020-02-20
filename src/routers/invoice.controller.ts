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
import { ICreateInvoiceService } from '~/services/ICreateInvoiceService'


@controller('')
export class InvoiceAPIController implements interfaces.Controller {
  constructor(
    @inject(TYPES.ICreateInvoiceService)
    private createInvoiceService: ICreateInvoiceService,
  ) {}

  @httpPost('/createInvoice')
  public async asignacionMedio(
    @request() req: express.Request,
    @response() res: express.Response,
    @next() nextFunc: express.NextFunction
  ) {
    const data = req.body
    const validationResult = joi.validate(data, asignacionMedioRequestSchema)
    if (validationResult.error) {
      const httpResponse: IResponse = {
        data: '',
        errors: ['invalid_request'],
      }

      res.status(422).json(httpResponse)
      nextFunc()
      return
    }

    try {
      const result = await this.coordinadorService.asignarMedio(data)
      const httpResponse: IResponse = {
        data: {
          codeMessages: result.codeMessages,
          fechaHora: result.fechaHora,
          fechaVencimiento: result.fechaVencimiento,
          numeroTarjetaCredito: result.numeroTarjetaCredito,
          statusAsignacionMedio: result.statusAsignacionMedio,
        },
        errors: result.statusAsignacionMedio ? Array() : result.errors,
      }
      res.json(httpResponse)
      nextFunc()
      return
    } catch (error) {
      this.logger.error(
        `POST /v1/asignacionMedios - AsignacionMedioExpress error: ${JSON.stringify(
          error
        )}`
      )
      res.status(500).json({ errors: ['internal_server_error'] })
      nextFunc()
      return
    }
  }


}
