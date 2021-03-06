import logger from 'utils/logger'
import BaseError from './BaseError'
import httpStatus from 'http-status'
import { env } from 'configs'

const logError = (err) => logger.error(err)
const isOperationalError = (err) =>
  err instanceof BaseError ? err.isOperational : false

export const errorReporter = (err, req, res, next) => {
  logError(err)
  next(err)
}

export const generalErrorHandler = (err, req, res, next) => {
  const status = err?.status || httpStatus.INTERNAL_SERVER_ERROR
  const message =
    err instanceof BaseError && err.isPublic
      ? err.message
      : httpStatus[`${status}`]
  const response = {
    code: status,
    message,
    ...(env.is.DEV() && { stack: err.stack })
  }

  res.status(status)
  res.json(response)
}

export const unhandledRejectionHandler = (err) => logError(err)

export const uncaughtExceptionHandler = (err) => {
  logError(err)
  if (!isOperationalError(err)) {
    logger.info('UNCAUGHT EXCEPTION! 💥 Shutting down...')
    process.exit(1)
  }
}
