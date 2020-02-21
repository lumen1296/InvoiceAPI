import { Mongoose } from 'mongoose'

export class InvoiceSchema {

  public getSchema = new Mongoose({
    lastName: {
      type: String
    },
    date: {
      date  :  { type: Date, default: Date.now }
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

}
