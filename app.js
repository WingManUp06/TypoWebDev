const express = require("express")
const app = express()
const nodemailer = require("nodemailer")

app.use(express.static("static"))

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.post("/contact", async (req, res) => {
    const { fname, lname, email, companyName, message} = req.body
    res.redirect("/contactus.html")
    await sendEmail(fname, lname, email, companyName, message).catch(console.error);
})

async function sendEmail(fname, lname, email, companyName, message){
  let emailContent = `
  First Name: ${fname}
  Last Name: ${lname}
  Email: ${email}
  Company Name: ${companyName}
  Message: 
  ${message}
  `

  // console.log(emailContent)


  let date = new Date()
  // console.log(date)
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    port: 587,
    secureConnection: false, // true for 465, false for other ports
    tls: {
      ciphers: "SSLv3",
    },
    auth: {
      user: "responder44@outlook.com", 
      pass: "1lovenode3",
    },
    from: "aaa",
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: "responder44@outlook.com", // sender address
    to: "dajuan@typowebdev.com", // list of receivers
    subject: `${date} New Inquiry`, // Subject line
    text: emailContent // plain text body
  });



//   console.log("Message sent: %s", info.messageId);
//   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

}

app.listen(3000)