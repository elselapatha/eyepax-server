import httpStatus from 'http-status'
import carouselService from 'services/carousel.service'
import { slides } from 'configs'

export async function getSlides(req, res, next) {
  try {
    const limit = req?.query?.slides || slides.max
    const slidesData = await carouselService.getSlides(limit)
    res.status(httpStatus.OK).json(slidesData)
  } catch (error) {
    next(error)
  }
}

export default { getSlides }
