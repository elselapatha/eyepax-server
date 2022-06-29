import { Router } from 'express'

import carousel from './carousel.route'

const routes = Router()

routes.use('/carousel', carousel)

export default routes
