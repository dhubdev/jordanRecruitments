import { accessTokenFunc, refreshTokenFunc } from "@/helpers/jwtHelper";
import connectDB from "../../../lib/mongoose";
import User from "../../../model/userModel";
//import nodemailer from "nodemailer";
import bcrypt from "bcryptjs";

connectDB();
export default async (req, res) => {
  try {
    if (req.method === "POST") {
      const { email, fullname, password, phone, confirmPass } = req.body;

      //console.log(req.body);

      if (!email || !password || !fullname || !phone) {
        return res.status(422).json({ error: "Please fill all fields" });
      }

      const user = await User.findOne({ email: email });

      if (user) {
        return res.status(422).json({ error: "User already exists" });
      }

      if (password.length < 8) {
        return res
          .status(400)
          .json({ error: "Password needs to be at least 8 characters" });
      }

      if (password !== confirmPass) {
        res.status(422).json({ error: "Repeated password did not match" });
      } else {
        const HashedPassword = await bcrypt.hash(password, 12);

        const newUser = await new User({
          email: email,
          password: HashedPassword,
          fullname: fullname,
          phone: phone,
        }).save();

        // const message = `<div style=' width:20rem; height: 15rem'>
        // <h2 style="text-align: center; margin-bottom:1.5rem;">Your verification Code</h2>
        // <p style="text-align: center; margin-bottom:1.5rem;">Below is your 4-digit verification code</p>
        // <p style='text-align:center;  background:#003399; color:#fff; border-radius:10px; width:10rem; padding:1rem 0; margin-left:5rem; font-size:1.2rem; font-weight:600;'>${newUser.otp}</p>
        // </div>`;

        // const transporter = nodemailer.createTransport({
        //   port: 465,
        //   host: "smtp.gmail.com",
        //   auth: {
        //     user: process.env.EMAIL_USERNAME,
        //     pass: process.env.EMAIL_PASSWORD,
        //   },
        //   secure: true,
        // });

        // await new Promise((resolve, reject) => {
        //   // verify connection configuration
        //   transporter.verify(function (error, success) {
        //     if (error) {
        //       console.log(error);
        //       reject(error);
        //     } else {
        //       console.log("Server is ready to take our messages");
        //       resolve(success);
        //     }
        //   });
        // });

        // const mailOptions = {
        //   from: `Prep <${process.env.EMAIL_USERNAME}>`,
        //   to: newUser.email,
        //   subject: "Verification code",
        //   html: message,
        // };

        // await new Promise((resolve, reject) => {
        //   // send mail
        //   transporter.sendMail(mailOptions, (err, info) => {
        //     if (err) {
        //       console.error(err);
        //       reject(err);
        //     } else {
        //       console.log(info);
        //       resolve(info);
        //     }
        //   });
        // });

        const accessToken = await accessTokenFunc(newUser._id.toString());
        const refreshToken = await refreshTokenFunc(newUser._id.toString());

        res.status(201).json({
          status: "Sign up successful!",
          user: newUser,
          result: { accessToken, refreshToken },
        });
      }
    }
  } catch (error) {
    console.log(error);
  }
};
