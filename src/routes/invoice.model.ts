import joi from 'joi'

export const invoiceRequestSchema = joi
  .object()
  .keys({
    lastName: joi.string().required(),
    date: joi.date().required(),
    invoiceNumber: joi.number().required(),
    net: joi.number().required(),
    tax: joi.number().required(),
    total: joi.number().required()}).required()
