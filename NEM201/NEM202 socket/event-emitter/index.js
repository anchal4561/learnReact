const {EventEmitter}=require("events")//node js is event driven

//create system that listen for events
const Button =new EventEmitter();


///listen
Button.on("click",(params)=>{
    console.log("button clicked",params)
})

Button.on("doubleclick",(params)=>{
    console.log("button double clicked",params)
})
// Button.emit("click",1)

// setTimeout(()=>{
//     Button.emit("click",2)
// },2000)

// Button.off("click",()=>{
//     Button.emit("click")
// },20000)
//emitting
// Button.emit("click",1)
// Button.emit("click","hello")



// const Player=new EventEmitter();
// Player.on("shoot",()=>{
//     console.log("Player shot someone else")
// })
// Player.emit("shoot")
// Button.emit("dog")//triggered

module.exports=Button