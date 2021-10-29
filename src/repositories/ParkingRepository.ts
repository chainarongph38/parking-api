import { Slot } from './../models/Slot';
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

  async getSlotById (id: string) {
    let result:any
    try {
      result = await Slot.findAll({
        where: {
          parking_id: parseInt(id)
        },
        raw: true,
      })
    } catch (err: any) {
      console.log(err)
      throw CustomError.databaseError('got error from database', err.stack)
    }
    return result
  }
}

export default new ParkingRepository()
