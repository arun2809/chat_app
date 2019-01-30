$(document).ready(function(){
    const socket = io('http://localhost:8090')
    // const socket = io()






let chatapp = ()=>{
    
    $('button').click(function(){
       socket.emit('chat-msg',$('#inpt').val(),$('#inpt1').val())
   
    })

    socket.on("chat-msg",function(data){
        console.log(data)
        $('ul').append($('<li>').text(data))
    })

   
   


}

chatapp();
})





