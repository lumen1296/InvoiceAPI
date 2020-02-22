import { model, Schema } from "mongoose"

const schemaTypes = Schema.Types;
const invoiceSchema = new Schema({
  lastName: {
    type: String
  },
  date: {
     type: String, default: new Date() 
  },
  invoiceNumber: {
    type: Number, index: { unique: true }
  },
  net: {
    type: schemaTypes.Decimal128
  },
  tax: {
    type: Number
  },
  total: {
    type: schemaTypes.Decimal128
  },

}, {
  collection: 'invoice'
})


export const invoiceModel = model("invoice", invoiceSchema)