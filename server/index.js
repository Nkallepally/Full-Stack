const express=require('express')
const mongoose=require('mongoose')
const cors=require("cors")
const sign=require('./routes/signup')


let port=process.env.PORT || 3003

mongoose.connect("mongodb+srv://Navyaa:Navya29@cluster0.vv8toxm.mongodb.net/?retryWrites=true&w=majority",()=>{
    console.log("Successfully connected to db");
}, (err)=> {
    console.log(err)
});




const app=express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))





app.listen(port, ()=> {
    console.log(`App Listening at ${port}`)
})


app.use("/", sign)