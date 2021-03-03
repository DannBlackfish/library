const mongoose = require('mongoose');
const express = require('express');
const app  = express.Router();
const bcrypt = require("bcrypt")
const saltRounds = 10

const Books = require("../models/Books.model.js");
const User = require("../models/User.model.js");


app.get("/database", async (req,res,next)=>{
    const dbBooks = await Books.find({})
    console.log(dbBooks)
    res.json(dbBooks)
})


app.get("/bookdetail/:book", async (req,res,next)=>{
    const bookId = req.params.book 
    const dbDetail = await Books.findById({_id:bookId})
    res.json(dbDetail)
})

//login 

//crear usuario 
app.post("/create/user" , async (req,res,next)=>{
    const {name,user,email,password} = req.body
    console.log(name,user,email,password)

  const genResult = await bcrypt.genSalt(saltRounds)
  const passwordHash = await bcrypt.hash(password,genResult)
  const newUser = await User.create({name, username:user, email, passwordHash})
  console.log(`The user ${newUser} was created`)
//   req.session.currentUser = newUser
//   console.log("esta es la cookie",req.session.currentUser)
})

//editar 



module.exports = app;
