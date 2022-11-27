const os=require("os")
console.log(os.cpus().length)
console.log(os.cpus()[0].model)

console.log(os.version())
console.log(os.platform())
console.log(os.arch())
console.log(os.uptime())

