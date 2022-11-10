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

var user = new mongoose.model('user',schema);

module.exports = user