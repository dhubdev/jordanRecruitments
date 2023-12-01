import connectDB from "../../../lib/mongoose";
import Job from "../../../model/jobsModel";

connectDB();
export default async (req, res) => {
  try {
    const posts = await Job.find({});

    res.status(201).json({
      status: "Completed!",
      result: posts,
    });
  } catch (error) {
    console.log(error);
  }
};
