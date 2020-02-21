import joi from 'joi'

export const invoiceRequestSchema = joi
  .object()
  .keys({
    lastName: joi.string().required(),
    invoiceNumber: joi.number().required(),
    net: joi.number().precision(2).strict(),
    tax: joi.number().required(),
    total: joi.number().precision(2).strict()}).required()
