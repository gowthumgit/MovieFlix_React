const seatModel = require('../model/seatModel.js')

exports.createSeat = async(req,res) =>{
    const seat = new seatModel({
        row : req.body.row,
        col : req.body.col,
        status : req.body.status
    })

    await seat.save()
              .then((data)=>{
                res.send({
                    msg : "Seat Added",
                    seat : data
                })
              })
              .catch((error)=>{
                res.status(500).send({
                    error : error.message || "Some error is there",
                    error : error.message
                })
              })
}

exports.getAllSeats = async(req,res)=>{
    await seatModel.find()
    .then((data)=>{
        res.send(data)
    })
    .catch((error)=>{
        res.status(500).send({
            message: error.message || "Some error occured while retreiving data",
            error : error.message
        })
    })
}

exports.getSeatById = async(req,res)=>{
    await seatModel.findById(req.params.id)
    .then((data)=>{
        if(!data){
            return res.status(404).send({
                message:"seat not found with id "+req.params.id
            })
        }
        res.send(data)
    })
    .catch((error)=>{
        if(error.kind === "ObjectId"){
            return res.status(404).send({
                message : "seat not found with id: "+req.params.id,
                error : error.message
            })
        }
        return res.status(500).send({
            message:"Error retreiving seat with id "+req.params.id,
            error : error.message
        })
    })
}

exports.updateSeatById = async(req,res)=>{
    await seatModel.findByIdAndUpdate(
        req.params.id,
        {
            row : req.body.row,
            col : req.body.col,
            status : req.body.status
        })
        .then((data)=>{
            if(!data){
                return res.status(404).send({
                    message:"Seat not found with id "+req.params.id
                })
            }
            res.send({
                message: "Seat Updated successfully with id: "+req.params.id
            })
        })
        .catch((error)=>{
            if(error.kind === "ObjectId"){
                return res.status(404).send({
                    message : "Seat not found with id: "+req.params.id,
                    error : error .message
                })
            }
            return res.status(500).send({
                message:"Error updating seat with id "+req.params.id ,
                error : error.message
            })
        })
}

exports.deleteSeatById = async(req,res)=>{
    await seatModel.findById(req.params.id)
                   .then(async (data)=>{
                    if(!data){
                        return res.status(404).send({
                            message: "Seat not found with id: "+req.params.id
                        })
                    }else{
                        await seatModel.findByIdAndDelete(req.params.id)
                                        .then(()=>{
                                            return res.status(200).send(({
                                                message:"Seat deleted Successfully"
                                            }))
                                        })
                                        .catch((error)=>{
                                            return res.status(400).send({
                                                message : "Some problem occured while deleting seat with id: "+req.params.id,
                                                error: error.message
                                            })
                                        })
                    }
                   })
                   .catch((error)=>{
                    return res.status(400).send({
                        message: "Seat not found with id: "+req.params.id,
                        error : error.message
                    })
                   })
}
