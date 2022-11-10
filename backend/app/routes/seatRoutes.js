const express = require('express')
const router = express.Router()
const controller = require('../controllers/seatController.js')

router.post('/create-seat',controller.createSeat)
router.get('/get-all-seats',controller.getAllSeats)
router.get('/get-seat-by-id/:id',controller.getSeatById)
router.patch('/update-seat-by-id/:id',controller.updateSeatById)
router.delete('/delete-seat-by-id/:id',controller.deleteSeatById)


module.exports = router