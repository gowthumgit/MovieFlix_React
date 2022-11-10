const mongoose = require('mongoose')
const schema = mongoose.Schema

const seatSchema = new schema({
    row : {
        type : String
    },
    col : {
        type : Number
    },
    status : {
        type : String
    }
},{
    collection : 'seat'
})

module.exports = mongoose.model('Seat',seatSchema)