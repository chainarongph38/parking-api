import express from 'express'
import CustomError from '../utilities/CustomError'
import parkingService from '../services/ParkingService'

const router = express.Router()

router.post('/create', async (req:express.Request, res:express.Response) => {
  try {
    const { statusCode, response } = await parkingService.createParking(req.body)
    res.status(statusCode).json(response)
  } catch (err: any) {
    if (err instanceof CustomError) {
      res.status(err.statusCode).json({message: err.errorDescription})
    } else {
      res.status(500).json(err.error)
    }
  }
})

export default router
