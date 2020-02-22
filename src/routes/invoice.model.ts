import joi from 'joi'

export const invoiceRequestSchema = joi
  .object()
  .keys({
    invoiceNumber: joi.number().required(),
    net: joi.number().required(),
    tax: joi.number().required(),
    total: joi.number().required()}).required()
