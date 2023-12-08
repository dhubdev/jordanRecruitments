import connectDB from "../../../lib/mongoose";
import Job from "../../../model/jobsModel";

connectDB();

export default async (req, res) => {
  const { id, apps } = req.body;

  //   console.log(req.params);
  try {
    const newUpdate = await Job.updateOne(
      { _id: id },
      { apps: apps },
      { new: true }
    );

    const response = await Job.findOne({
      _id: id,
    });
    res.status(200).json({
      result: response,
    });
  } catch (err) {
    console.log(err);
  }
};
