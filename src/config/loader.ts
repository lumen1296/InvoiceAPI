import { container, buildProviderModule } from './inversify.config'

/* REST Controllers */
import '../routes/invoice.controller'

/* Services */
import '../services/createInvoiceService/createInvoiceService'
import '../services/deleteInvoiceService/deleteInvoiceService'
import '../services/getInvoiceService/getInvoiceService'
import '../services/listInvoiceService/listInvoiceService'

container.load(buildProviderModule())