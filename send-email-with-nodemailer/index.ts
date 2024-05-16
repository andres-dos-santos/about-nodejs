import nodemailer from "nodemailer";

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
});

let mailOptions = {
  from: process.env.EMAIL,
  to: process.env.EMAIL,
  subject: "Enviando e-mail com Node.js",
  text: "Olá! Este e-mail foi enviado usando Node.js!",
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }

  console.log("Email enviado", info);
});
