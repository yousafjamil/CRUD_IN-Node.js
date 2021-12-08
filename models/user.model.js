const  mongoose=require('mongoose');

const  userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        required:true
    },
    role:{
        type:String,
      
    }
});

const  userModel=mongoose.model('user',userSchema);

module.exports=userModel;