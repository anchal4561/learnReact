const express = require("express")

const app = express.Router()

const validate = (req, res, next) => {
    const {id,Name,Rating, Description, Genre, Cast} = req.body
    if (req.body && id && Name && Rating && Description && Genre && Cast &&
        typeof (Name) === 'string' && typeof (Description) === 'string' && typeof (Genre) === 'string' &&
        typeof (id) === 'number' && typeof (Rating) === 'number' && typeof (id) === 'number' && Cast.every((el) => typeof (el) === 'string'))  {
        next();
    } else {
        res.status(400).send("Data is not Appropriate")
    }
}

app.use(validate)

app.post("/", (req, res) => {
    res.status(200).send("Data is All right")
})  


module.exports=app;