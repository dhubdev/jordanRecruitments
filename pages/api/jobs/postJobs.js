import connectDB from "../../../lib/mongoose";
import Job from "../../../model/jobsModel";

connectDB();
export default async (req, res) => {
  try {
    if (req.method === "POST") {
      const { userId, title, pay, type, desc, location, duration, option } =
        req.body;
      if (
        !userId ||
        !title ||
        !pay ||
        !type ||
        !desc ||
        !location ||
        !duration ||
        !option
      ) {
        return res.status(422).json({ error: "Please fill all fields" });
      }

      const newJob = await new Job({
        userId: userId,
        title: title,
        option: option,
        pay: "£ " + pay,
        type: type,
        desc: desc,
        location: location,
        duration: duration,
        datePosted: new Date(),
        apps: 0,
        closed: false,
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
