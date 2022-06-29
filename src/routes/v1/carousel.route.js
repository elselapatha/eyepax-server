import { Router } from 'express'

import validator from 'middleware/validator'
import { slideSchema } from 'validators/carousel.validator'
import carouselController from 'controllers/carousel.controller'

const router = Router()

/**
 * @openapi
 * /carousel:
 *  get:
 *    tags:
 *      - Carousel
 *    summary: Carousel slides
 *    description: To get carousel slides
 */
router.get('/', validator(slideSchema), carouselController.getSlides)

export default router
