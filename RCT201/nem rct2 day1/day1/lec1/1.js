
const {sum,sub,mul,div}=require("./math")
//inbuild module in node js to  help us to navigate  betwwn paths
const path =require("path")
console.log(sum(10,12))
console.log(sub(10,12))

console.log(mul(10,12))
console.log(div(10,12))

console.log(process.cwd())
console.log(path.join(process.cwd() ,"..","Assets"));