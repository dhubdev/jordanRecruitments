import connectDB from "../../../lib/mongoose";
import User from "../../../model/userModel";
//import nodemailer from "nodemailer";
import bcrypt from "bcryptjs";

connectDB();
export default async (req, res) => {
  try {
    if (req.method === "POST") {
      const {
        email,
        fullname,
        password,
        phone,
        confirmPass,
        employeer,
        address,
      } = req.body;

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
          employeer: employeer,
          address: address,
        }).save();

        res.status(201).json({
          status: "Sign up successful!",
          user: newUser,
        });
      }
    }
  } catch (error) {
    console.log(error);
  }
};
