import { Parking } from '../models/Parking';
import CustomError from '../utilities/CustomError'
import CreateParkingRequest from '../interfaces/CreateParkingRequest'
class ParkingRepository {
  async createParking (createParkingRequest: CreateParkingRequest) {
    let result:any
    try {
      result = await Parking.create(createParkingRequest)
      result = result.toJSON()
    } catch (err: any) {
      throw CustomError.databaseError('got error from database', err.stack)
    }
    return result
  }
}

export default new ParkingRepository()
