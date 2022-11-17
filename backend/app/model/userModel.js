var mongoose = require('mongoose');

var schema=new mongoose.Schema({
    userId:{
        type:String,
        required:true,
        unique:true
    },
    userEmail:{
        type:String,
    },
    userPassword:{
        type:String,        
    },
    
    userPhoneNo:{
        type:String,
    },
    userBalance :{
        type:Number,
    }
  
});

var userrc= new mongoose.model('userrc',schema);

module.exports = userrc