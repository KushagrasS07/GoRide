const dotenv=require('dotenv');
dotenv.config();
const express=require('express')
const cors=require('cors')

const app=express();

app.use(cors());//right listening to requests from every site

app.get("/",(req,res)=>{
    res.send("Hiii!!")
})

module.exports=app;