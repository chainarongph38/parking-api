export default class CustomError extends Error {
  statusCode: number
  error: any
  errorDescription?: any
  stack: any
  additionalErrorDescription: any
  __proto__ = Error

  constructor (statusCode: number, error: any, errorDescription?: any, stack?: any, additionalErrorDescription?: any) {
    super()
    this.statusCode = statusCode
    this.error = error
    this.errorDescription = errorDescription
    this.additionalErrorDescription = additionalErrorDescription
    Object.defineProperty(this, 'stack', {
      value: stack,
      writable: true,
      enumerable: true
    })
    Object.setPrototypeOf(this, CustomError.prototype)
  }

  static badRequest (errorDescription?: any, stack?: any, additionalErrorDescription?: any) {
    return new CustomError(400, 'invalid_param', errorDescription, stack, additionalErrorDescription)
  }

  static databaseError (errorDescription?: any, stack?: any, additionalErrorDescription?: any) {
    return new CustomError(500, 'database_error', errorDescription, stack, additionalErrorDescription)
  }
}
