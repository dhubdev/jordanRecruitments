import connectDB from "../../../lib/mongoose";
import Job from "../../../model/jobsModel";

connectDB();
export default async (req, res) => {
  try {
    const { jobId, title, pay, type, desc, location, duration } = req.body;
    if (!title || !pay || !type || !desc || !location || !duration) {
      return res.status(422).json({ error: "Please fill all fields" });
    }

    console.log(req.body);

    const newUpdate = await Job.updateOne(
      { _id: jobId },
      {
        title: title,
        pay: pay,
        type: type,
        desc: desc,
        location: location,
        duration: duration,
      },
      { new: true }
    );

    const response = await Job.findOne({
      _id: jobId,
    });

    res.status(201).json({
      status: "Job updated successfully",
      result: response,
    });
  } catch (error) {
    console.log(error);
  }
};
