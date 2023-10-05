const socket=io()
let name;
do {
    name=prompt('enter your name')

}while(!name)
let textarea=document.querySelector('#textarea')
let msgarea=document.querySelector('.msg_area')
textarea.addEventListener('keyup',(e)=>{
    if (e.key==='Enter'){
    sendmsg(e.target.value)
}
})
function sendmsg(message){
    let msg={
        user:name,
        message:message.trim()
    }
    appendmsg(msg,'outgoing')
    textarea.value=''
    socket.emit('message',msg)
}


function appendmsg(msg,type){
    let maindiv=document.createElement('div')
    let classname=type
    maindiv.classList.add(classname,'msg')
    let markup=`
    <h4>${msg.user}<h4/>
    <p>${msg.message}<p/>
    
    `
    maindiv.innerHTML=markup
    msgarea.appendChild(maindiv)



}

socket.on('message',(msg)=>{
    appendmsg(msg,'incoming')
    
})

