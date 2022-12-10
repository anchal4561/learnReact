const nodemailer = require("nodemailer")

const emailUsername = "ayana.hirthe@ethereal.email"
const emailPassword = "vb5V7YP4q86XVqzSbn";

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: emailUsername,
        pass: emailPassword
    }
});

transporter.sendMail({
    to:"gagan@gmail.com",
    from:"vinay@gmail.com",
    subject:"reset-password",
    text:"Reset your Password else account will be blocked"
})
.then(()=>{
    console.log("Email sent")
})