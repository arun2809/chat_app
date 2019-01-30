const express = require('express')
const app = new express();
const http = require('http')
const socket= require('socket.io')
const path = require('path')

app.use(express.static(path.join(__dirname,'client')))

const server = http.createServer(app)

const socketlib = require('./socket/socketlib')

socketlib.setserver(server);



server.listen(process.env.PORT ||8090,()=>{
    console.log("running on 8090")
   
})