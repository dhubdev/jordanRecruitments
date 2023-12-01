import connectDB from "../../../lib/mongoose";
import Job from "../../../model/jobsModel";

connectDB();
export default async (req, res) => {
  try {
    if (req.method === "POST") {
      const { userId, title, pay, type, desc, location, duration, datePosted } =
        req.body;
      if (
        !userId ||
        !title ||
        !pay ||
        !type ||
        !desc ||
        !location ||
        !duration ||
        !datePosted
      ) {
        return res.status(422).json({ error: "Please fill all fields" });
      }

      const newJob = await new Job({
        userId: userId,
        title: title,
        pay: pay,
        type: type,
        desc: desc,
        location: location,
        duration: duration,
        datePosted: datePosted,
      }).save();

      res.status(201).json({
        status: "Job posted successfully",
        result: newJob,
      });
    }
  } catch (error) {
    console.log(error);
  }
};
