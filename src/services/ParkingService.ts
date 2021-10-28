import CreateParkingRequest from '../interfaces/CreateParkingRequest'
import parkingRepository from '../repositories/ParkingRepository'

class ParkingService {
  public async createParking (createParkingRequest: CreateParkingRequest) {
    const result = await parkingRepository.createParking(createParkingRequest)
    return { statusCode: 200, response: result }
  }
}

export default new ParkingService()
