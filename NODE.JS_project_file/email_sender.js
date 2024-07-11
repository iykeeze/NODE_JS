import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "manueleze36@gmail.com",
    pass: "dey_play",
  },
});

const mailOptions = {
  from: "manueleze36@gmail.com",
  to: "lilchizzyblingz27@gmail.com",
  subject: "Sending Email using Node.js",
  text: "hey👍",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
