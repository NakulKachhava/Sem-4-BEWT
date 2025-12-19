const EventEmitter = require('events')

const emitter = new EventEmitter()

emitter.on('greet',(name)=>{
    console.log("Hello From"+name);
    
})

setInterval(()=>{
    emitter.emit("greet");
},1000)