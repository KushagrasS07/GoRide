const http=require('http');
const nodemon=require('nodemon')
const app=require('./app')
const port=process.env.PORT || 3000//.PORT is name of variable initialised port number in .env file

const server=http.createServer(app)

server.listen(port,()=>{
    console.log("Server is running successfully")
})