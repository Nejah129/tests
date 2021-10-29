const { request } = require("express");
const express = require("express");

require('dotenv').config({path:'./Config/.env'});
const ConectDB=require('./Config/ConectDB')
const app = express();
app.use(express.json());
const User=require('./models/User')
//add user
app.post('/users/successful/add',async(req,res)=>{
    const {name,email,number}=req.body;
    const newUser= new User({name,email,number});
    try {
        let user= await newUser.save()
        res.send(user)
    } catch (error) {
        console.log(error)
        
    }
})
//get all users
app.get('/users/get',async(req,res)=>{
    try {
        let users=await User.find()
        res.send(users)
    } catch (error) {
        console.log(error)
    }
})
// get a sinel user
app.get('/users/get/:userID',async(req,res)=>{
    try {
        let user=await User.findById(req.params.userID)
        res.send(user)
    } catch (error) {
        console.log(error)
    }
})
//delete user
app.delete('/users/delete/:userID',async(req,res)=>{
    try {
        await User.findByIdAndDelete(req.params.userID)
        res.send('this User is gone')
    } catch (error) {
        res.send(error)
    }
})
//edit user
app.put('/users/edit/:userID',async(req,res)=>{
    try {
        let= editedUser= await User.findByIdAndUpdate(req.params.userID,{...req.body},{new:true})
        res.send(editedUser)
    } catch (error) {
        res.send(error)
    }
})



ConectDB();
const PORT = process.env.PORT || 8000;
app.listen(PORT, (err) =>
  err ? console.log(err) : console.log(`Server is runing ${PORT}`)
);
