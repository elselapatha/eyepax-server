import Joi from 'joi'

export const slideSchema = {
  query: Joi.object().keys({
    slides: Joi.number().max(10).min(1)
  })
}
