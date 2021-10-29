import Joi from 'joi'

export const VALIDATE_CREATE_PARKING_REQUEST: any = Joi.object({
  name: Joi.string()
    .required(),
  slot: Joi.number()
    .required()
}).unknown(true)