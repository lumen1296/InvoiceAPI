import { buildProviderModule, container } from '@config/inversify.config'

/* REST Controllers */
import '@routes/invoice.controller'

/* Services */
import '@services/createInvoiceService'

container.load(buildProviderModule())