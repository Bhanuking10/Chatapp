const express=require('express')
const app=express()
const http=require('http').createServer(app)
app.use(express.static('public'))
app.get("/",(req,res)=>{
    
    res.sendFile(__dirname +"/public/index.html")
})

http.listen(8000,()=>{
    console.log("connection sucessfull")
})
const io=require('socket.io')(http)
io.on('connection',(socket)=>{
    console.log('connected')
    socket.on("message",(msg)=>{
        socket.broadcast.emit("message",msg)
    })
})
