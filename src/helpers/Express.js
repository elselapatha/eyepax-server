import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import express from 'express'
import compress from 'compression'

export default class Express {
  #app
  build(routes) {
    this.#app = express()
    this.#app.use(cors())
    this.#app.use(helmet())
    this.#app.use(compress())
    this.#app.use(morgan('dev'))
    this.#app.use(express.json())
    this.#app.use(express.urlencoded({ extended: true }))

    this.#app.use('/', express.static('public'))

    if (routes) {
      this.#app.use(routes)
    }

    return this
  }

  setRoutes(routes) {
    if (routes) {
      this.#app.use(routes)
    }
  }

  setPort(port) {
    port = this.#validatePort(port)
    return this.#app
  }

  use(context) {
    if (context) {
      this.#app.use(context)
    }
  }

  get app() {
    return this.#app
  }

  getApp() {
    return this.#app
  }

  start(port, onListening) {
    port = this.#validatePort(port)
    this.#app.listen(port, onListening)
  }

  #validatePort(val) {
    const port = parseInt(val, 10)

    if (isNaN(port)) {
      throw new Error('Invalid Port Number!')
    }

    if (port >= 0) {
      return port
    }

    return new Error('Something wrong in port number!')
  }
}
