import _ from 'lodash'
import { APIError, BaseError } from 'errors'
import slidesData from '../data.js'
import { logger } from 'utils'

/**
 * To get get image slides
 * @param {Number} limit - the limit is number value
 * @returns {Promise<Slides>} - Return promise and it resolves Slides
 * @throws {(APIError)}
 */
export async function getSlides(limit) {
  try {
    const slides = _.take(slidesData, limit)
    return slides
  } catch (error) {
    logger.error(error)
    if (error instanceof BaseError) throw error
    throw new APIError('Error while finding slides.')
  }
}

export default { getSlides }
