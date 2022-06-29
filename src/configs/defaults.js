export class NodeEnv {
  static DEV = 'dev'
  static TEST = 'test'
  static PROD = 'production'

  static toArray() {
    return Object.values(this)
  }
}

const defaults = Object.freeze({
  NodeEnv
})

export default defaults
