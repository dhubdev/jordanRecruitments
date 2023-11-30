import connectDB from "../../../lib/mongoose";
import User from "../../../model/userModel";
//import nodemailer from "nodemailer";
import bcrypt from "bcryptjs";

connectDB();
export default async (req, res) => {
  try {
    if (req.method === "POST") {
      const { email, password } = req.body;

      //console.log(req.body);

      if (!email || !password) {
        return res.status(422).json({ error: "Please fill all fields" });
      }

      const user = await User.findOne({ email: email });

      if (!user) {
        return res.status(422).json({ error: "Invalid username or password" });
      }
      const doMatch = await bcrypt.compare(password, user.password);

      if (doMatch) {
        res.status(200).json({
          status: "Login Successful!",
          user: user,
        });
      } else {
        return res.status(422).json({ error: "Invalid username or password" });
        //return res.status(401).json({ error: "Invalid credentials" });
      }
    }
  } catch (error) {
    console.log(error);
  }
};
