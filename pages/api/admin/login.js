import connectDB from "../../../lib/mongoose";
import Admin from "../../../model/adminModel";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

connectDB();

export default async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(422).json({ error: "Please fill all fields" });
    }

    const user = await Admin.findOne({ email: email });

    if (!user) {
      return res.status(404).json({ error: "Invalid credentials" });
    }

    const doMatch = await bcrypt.compare(password, user.password);

    if (doMatch) {
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });

      if (!doMatch) {
        return res.status(401).json({ error: "Invalid credentials" });
      }

      //const { email, _id, firstName, lastName } = user;

      res.status(200).json(user);
    } else {
      return res.status(401).json({ error: "Invalid credentials" });
    }
  } catch (err) {
    console.log(err);
  }
};
