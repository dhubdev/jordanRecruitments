import connectDB from "../../../lib/mongoose";
import Job from "../../../model/jobsModel";

connectDB();
export default async (req, res) => {
  const { jobId } = req.body;
  try {
    const job = await Job.findOne({ _id: jobId });

    res.status(201).json({
      status: "Completed!",
      result: job,
    });
  } catch (error) {
    console.log(error);
  }
};
