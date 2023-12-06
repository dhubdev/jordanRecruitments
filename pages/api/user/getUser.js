import connectDB from "../../../lib/mongoose";
import User from "../../../model/userModel";

connectDB();

export default async (req, res) => {
  const { userId } = req.body;

  //   console.log(req.params);
  try {
    const user = await User.findOne({ _id: userId });

    res.status(200).json({
      status: "User found!",
      result: user,
    });
  } catch (err) {
    console.log(err);
  }
};
