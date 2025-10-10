import express from "express";
import nodemailer from "nodemailer";
import User from "../Models/User.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // Save message in MongoDB
    const newUser = new User({ name, email, message });
    await newUser.save();

    // Send email notification
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // use Gmail App Password
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Message saved and emailed successfully!" });
  } catch (err) {
    console.error("Error sending message:", err);
    res.status(500).json({ message: "Failed to process request." });
  }
});

export default router;
