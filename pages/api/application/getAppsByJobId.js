import connectDB from "../../../lib/mongoose";
import Application from "../../../model/applicationModel";

connectDB();
export default async (req, res) => {
  const { jobId } = req.body;

  try {
    const apps = await Application.find({ jobId: jobId });
    //console.log(apps);
    res.status(201).json({
      status: "Completed!",
      result: apps,
    });
  } catch (error) {
    console.log(error);
  }
};
