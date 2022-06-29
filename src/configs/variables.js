import 'dotenv/config'

const configs = {
  env: process.env.NODE_ENV || 'dev',
  port: process.env.PORT || 3600,

  slides: {
    max: process.env.SLIDES_MAX
  }
}

const { env, port, slides } = configs

export { env, port, slides }

export default configs
