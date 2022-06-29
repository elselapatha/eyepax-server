import BaseError from './BaseError'
import httpStatus from 'http-status'

export default class APIError extends BaseError {
  constructor(message, options = {}, isPublic = true) {
    const { name, stack, status } = options || {}
    super(message, status || httpStatus.INTERNAL_SERVER_ERROR, stack, isPublic)
    if (name) this.name = name
  }
}
