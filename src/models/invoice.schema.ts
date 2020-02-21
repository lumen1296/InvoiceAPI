import { model, Schema } from "mongoose"

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
    type: Number
  },
  tax: {
    type: Number
  },
  total: {
    type: Number
  },

}, {
  collection: 'invoice'
})


export const invoiceModel = model("invoice", invoiceSchema)