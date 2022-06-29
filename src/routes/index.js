import { Router } from 'express'

import v1 from './v1'
import health from './health.route'

import { errorReporter, generalErrorHandler } from 'errors'

const routes = Router()

// NOTE - API health status router
routes.use('/api', health)

routes.use('/api', v1)

// NOTE - Error handlers
routes.use(errorReporter)
routes.use(generalErrorHandler)
export default routes
