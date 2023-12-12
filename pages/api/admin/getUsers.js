import connectDB from "../../../lib/mongoose";
import User from "../../../model/userModel";

connectDB();

export default async (req, res) => {
  try {
    const data = await User.find();

    res.status(200).json(data);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
