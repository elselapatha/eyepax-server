import { NodeEnv } from './defaults'
import { env as _env } from './variables'

export const env = {
  value: _env,
  is: Object.keys(NodeEnv)
    .map((name) => ({
      [name]() {
        return NodeEnv[`${name}`] === _env
      }
    }))
    .reduce((result, item) => ({ ...result, ...item }))
}

export * from './defaults'
export { port, slides } from './variables'
