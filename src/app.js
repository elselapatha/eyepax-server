import figlet from 'figlet'

import routes from 'routes'
import Server from 'helpers/Express'
import { port } from 'configs'

import { unhandledRejectionHandler, uncaughtExceptionHandler } from 'errors'

// ANCHOR - Print emblem
console.log(figlet.textSync('EYEPAX API'))
console.log('----------------------------------------------------------')

const server = new Server().build(routes)

server.setPort(port)

process
  .on('unhandledRejection', unhandledRejectionHandler)
  .on('uncaughtException', uncaughtExceptionHandler)

export default server.app
