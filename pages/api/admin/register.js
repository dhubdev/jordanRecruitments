import connectDB from "../../../lib/mongoose";
import Admin from "../../../model/adminModel";

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

connectDB();
export default async (req, res) => {
  try {
    if (req.method === "POST") {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(422).json({ error: "Please fill all fields" });
      }

      const user = await Admin.findOne({ email: email });

      if (user) {
        return res.status(422).json({ error: "User already exists" });
      }

      if (password.length < 8) {
        return res
          .status(400)
          .json({ error: "Password needs to be at least 8 characters" });
      }

      const HashedPassword = await bcrypt.hash(password, 12);

      const newUser = await new Admin({
        email: email,
        password: HashedPassword,
        isAdmin: true,
      }).save();

      const token = jwt.sign({ _id: newUser._id }, process.env.JWT_SECRET, {
        expiresIn: "30d",
      });

      newUser.emailToken = token;
      const savedUser = await newUser.save();

      return res.status(201).json(savedUser);
    }
  } catch (error) {
    console.log(error);
  }
};
