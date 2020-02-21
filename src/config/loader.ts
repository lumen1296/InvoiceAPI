import { container, buildProviderModule } from './inversify.config'

/* REST Controllers */
import '../routes/invoice.controller'

/* Services */
import '../services/createInvoiceService'


container.load(buildProviderModule())