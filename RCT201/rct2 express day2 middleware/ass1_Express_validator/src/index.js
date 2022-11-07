const express = require("express");
const movieRouter = require("./Route/movie.route")

const app = express()
app.use(express.json())
app.use('/movie', movieRouter)


app.listen(4065,()=>{
    console.log("Server started")
})