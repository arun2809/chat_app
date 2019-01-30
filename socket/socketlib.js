const socketio = require('socket.io')



let setserver = (server)=>{
 let allOnlineUsers =[];
 let io = socketio.listen(server)
 let myio = io.of('')


 myio.on('connection',(socket)=>{
     console.log("user connected with socketid "+socket.id)

 


   

     socket.on("chat-msg",function(data){
        console.log(data)
     io.sockets.emit("chat-msg",data)
     
     })
      
     socket.on("startchat",function(data1)
     {
 
io.emit('startchat',data1)
   

     })

   


  
     

 
 
 })



}


module.exports = {
    setserver:setserver
}