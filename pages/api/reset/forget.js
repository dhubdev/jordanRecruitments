import connectDB from "../../../lib/mongoose";
import User from "../../../model/userModel";
import nodemailer from "nodemailer";
import jwt from "jsonwebtoken";
import absoluteUrl from "next-absolute-url";

connectDB();

export default async (req, res) => {
  //console.log(req.body)

  try {
    if (req.method === "POST") {
      const { email } = req.body;

      const user = await User.findOne({ email });

      if (!user) {
        res.status(404).json({ error: "email not found" });
      }

      // console.log(user);

      const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "30d",
      });

      // console.log(token);

      user.resetToken = token;
      await user.save();

      const { origin } = absoluteUrl(req);
      const link = `${origin}/reset/${token}`;

      const message = `<div>Click on the button below to reset your password.</div>
      <a href='${link}' style='text-decoration: none; '><button style='background:#5ba4fc; margin-top:2rem; color:white; width:10rem; border:none; border-radius:5px; padding:1rem 0.7rem; cursor:pointer;' >Reset Password</button></a>`;

      // console.log("message", message);

      // console.log("here");

      const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
          user: process.env.EMAIL_USERNAME,
          pass: process.env.EMAIL_PASSWORD,
        },
        secure: true,
      });

      await new Promise((resolve, reject) => {
        // verify connection configuration
        transporter.verify(function (error, success) {
          if (error) {
            console.log(error);
            reject(error);
          } else {
            console.log("Server is ready to take our messages");
            resolve(success);
          }
        });
      });

      const mailOptions = {
        from: `Jordan Recruitments <${process.env.EMAIL_FROM}>`,
        to: user.email,
        subject: "Password Reset",
        html: message,
      };

      await new Promise((resolve, reject) => {
        // send mail
        transporter.sendMail(mailOptions, (err, info) => {
          if (err) {
            console.error(err);
            reject(err);
          } else {
            console.log(info);
            resolve(info);
          }
        });
      });

      return res.status(200).json({
        message: `Please check your email`,
      });
    }
  } catch (error) {
    console.log(error);
  }
};
