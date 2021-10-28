import express from 'express'

import parkingController from './controllers/ParkingController'

const app = express()
app.use(express.json())

app.use('/parking', parkingController)

app.listen(3000, () => {
  console.log('Server listening at ' + 3000)
})
