import CreateParkingRequest from '../interfaces/CreateParkingRequest'
import parkingRepository from '../repositories/ParkingRepository'
import CustomError from '../utilities/CustomError'
import { VALIDATE_CREATE_PARKING_REQUEST } from '../validations/Schema'

class ParkingService {
  options = {
    errors: {
      wrap: {
        label: ''
      }
    },
    abortEarly: false
  }

  public async createParking (createParkingRequest: CreateParkingRequest) {
    const validateResult = VALIDATE_CREATE_PARKING_REQUEST.validate(createParkingRequest, this.options)
    this.handleValidateResult(validateResult)
    const result = await parkingRepository.createParking(createParkingRequest)
    return { statusCode: 200, response: result }
  }

  public handleValidateResult (validateResult: any) {
    if (validateResult.error) {
      const errorDetail = validateResult.error.details[0]
      const errorMessage = errorDetail.message
      throw CustomError.badRequest(errorMessage, errorDetail)
    }
  }
}

export default new ParkingService()
