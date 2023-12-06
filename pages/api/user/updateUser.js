import connectDB from "../../../lib/mongoose";
import User from "../../../model/userModel";

connectDB();

export default async (req, res) => {
  const { userId, fullname, email, phone, address } = req.body;

  //   console.log(req.params);
  try {
    const newUpdate = await User.updateOne(
      { _id: userId },
      { email: email, fullname: fullname, phone: phone, address: address },
      { new: true }
    );

    const response = await User.findOne({
      _id: userId,
    });
    res.status(200).json({
      status: "Profile updated successfully!",
      result: response,
    });
  } catch (err) {
    console.log(err);
  }
};
