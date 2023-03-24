const express = require("express")
const app = express()
const mongoose = require('mongoose')


// Middlewares
app.use(express.json())



// HTTP methods
// GET
// POST
// PUT ( update )
// DELETE


app.put("/",(req,res)=>{
    res.send("Data updated")
})

app.get("/",(req,res)=>{
    res.send("THis is your data")
})



app.post("/",(req,res)=>{
    console.log(req.body)
    res.send("You can save data in database in this method")
})





app.delete("/",(req,res)=>{
    res.send("Data Deleted")
})






mongoose.connect('mongodb://127.0.0.1:27017').then(() => console.log('Connected!')).catch((e)=>console.log(e))

app.listen(3000)