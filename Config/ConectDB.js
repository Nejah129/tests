const mongoose = require('mongoose');
// require('dotenv').config({path:`./config/.env`});
// const connectDB = require({path:`./config/ConectDB`});
module.exports=connectDB=async(req,res)=>{
    try {
        await mongoose.connect(process.env.db, {useNewUrlParser:true,useUnifiedTopology:true});
        console.log('Data base successfuly');
        
    } catch (error) {
        console.log(error)
        
    }
}