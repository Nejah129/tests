const mongoose=require('mongoose');
const Schema =mongoose.Schema; //or {Schema}=mongoose
const userSchema=new Schema({
    name:{
        type:String,required:true
    },
    email:String,
    number:String
});
module.exports=mongoose.model('User',userSchema)

