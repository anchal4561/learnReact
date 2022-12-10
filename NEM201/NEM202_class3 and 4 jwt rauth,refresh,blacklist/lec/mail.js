const nodemailer=require("nodemailer")

const emailUsername="lorenza.dickinson37@ethereal.email"
const emailPassword="Q1SeUQNw9VZbBeTvyz"


const transport=nodemailer.createTransport({
    host:"smtp.ethereal.email",
    port:587,
    auth:{
        user:emailUsername,
        pass:emailPassword,
    }
})

transport.sendMail({
    to:"giresh.bhat@gmail.com",
    from:"admission@masaischool.com",
    subject:"congrats an admission",
    html:"<h2>Hello gireesh</h2>",
    text:"Hello Gireesh you have been selected for masai batch1"

}).then(()=>{
    console.log("mail sent success")
})