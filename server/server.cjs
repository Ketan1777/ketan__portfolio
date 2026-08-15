const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();

const PORT = 5000;

/* =========================================================
   MIDDLEWARE
========================================================= */

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());


/* =========================================================
   EMAIL TRANSPORTER
========================================================= */

const transporter = nodemailer.createTransport({
  service: "gmail",

  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});


/* =========================================================
   TEST ROUTE
========================================================= */

app.get("/", (req, res) => {
  res.json({
    message: "Ketan Portfolio API is running 🚀",
  });
});


/* =========================================================
   CONTACT API
========================================================= */

app.post("/api/contact", async (req, res) => {

  try {

    const {
      name,
      email,
      message,
    } = req.body;


    /* VALIDATION */

    if (!name || !email || !message) {

      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });

    }


    /* EMAIL */

    const mailOptions = {

      from: process.env.EMAIL_USER,

      to: process.env.EMAIL_USER,

      replyTo: email,

      subject: `Portfolio Contact — ${name}`,

      text: `
Name: ${name}

Email: ${email}

Message:
${message}
      `,
    };


    await transporter.sendMail(mailOptions);


    res.status(200).json({

      success: true,

      message:
        "Message sent successfully!",

    });


  } catch (error) {

    console.error(
      "Email error:",
      error
    );

    res.status(500).json({

      success: false,

      message:
        "Failed to send message.",

    });

  }

});


/* =========================================================
   START SERVER
========================================================= */

app.listen(PORT, () => {

  console.log(
    `Server running on http://localhost:${PORT}`
  );

});