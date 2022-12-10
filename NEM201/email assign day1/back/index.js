const express = require("express")
const mongoose = require("mongoose")
const JWT = require("jsonwebtoken")
const UserModel = require("./models/user.model")
const argon2 = require("argon2")
const cors=require("cors")
const fs = require("fs")
const hbs = require("handlebars")
const template = hbs.compile(fs.readFileSync('./mail.hbs',"utf-8"))
const app = express()
app.use(cors())

const nodemailer = require("nodemailer")

const emailUsername = "clair.gutkowski41@ethereal.email"
const emailPassword = "WcPDvqTBwNpHvsqJAN";

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: emailUsername,
        pass: emailPassword
    }
});

app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.get("/", (req, res) => {
    res.send("hello")
})

const otp=0;
app.post("/signup", async (req, res) => {
    const { name, email, password, age } = req.body;
    const hash = await argon2.hash(password);
    const user = UserModel({ name, email, password:hash, age });

    await user.save();
        otp=Math.ceil((Math.random()*8990)+1000)
    // const html = await fs.readFile("./mail.html", "utf-8")
    
    transporter.sendMail({
        to: email,
        from: "vinay@gmail.com",
        subject: "verify-otp",
        // html:html.replace("{{User}}", name),
        html: template({
            User: name,
            // license: age > 18 ? "You are eligible" : "You are not eligible",
            otp:otp
        }),
        text: "Verify OTP for signup"
    })
        .then(() => {
            console.log("Email sent")
        })

    return res.status(201).send("User created successfully")
})

// app.post("/verifyuser")


app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email});

    if (await argon2.verify(user.password, password)) {
        const token = JWT.sign({ id: user._id, name: user.name }, "SKY2705", { expiresIn: "5 mins" });

        const refreshToken = JWT.sign({ id: user._id, name: user.name },"REFRESHTOKEN", {expiresIn:"7 days"})

        return res.status(201).send({ message: "Login successfully", token, refreshToken})

    }
    return res.status(401).send("Invalid")
})

app.get("/user/:id", async (req, res) => {
    const { id } = req.params;

    const token = req.headers["authorization"]

    if (!token) {
        return res.send("Unauthorised")
    }

    try {
        const verification = JWT.verify(token, "SKY2705")
        if (verification) {
            const user = await UserModel.findOne({ _id: id })
            return res.send(user)
        }
    } catch (error) {
        return res.send("Invalid Token")
    }
})


app.post("/refresh", (req,res)=>{
    const refreshToken = req.headers["authentication"];

    if(!refreshToken){
        return res.status(401).send("Unauthorized")
    }

    try {
        const varification = JWT.verify(refreshToken,"REFRESHTOKEN");

        if(varification){
            const newToken = JWT.sign({ id: varification.id, name: varification.name }, "SKY2705" , {expiresIn:"5 mins"})
        }
        return res.send({token: newToken})
    } catch (error) {
        // refresh token is expeired, redirect to login
    }

})

mongoose.connect("mongodb://localhost:27017/db21").then(() => {
    app.listen(8080, () => {
        console.log("Server Started")
    })
})
