import connectDB from "../../../lib/mongoose";
import Application from "../../../model/applicationModel";

connectDB();
export default async (req, res) => {
  try {
    if (req.method === "POST") {
      const {
        email,
        fullname,
        moveIn,
        address,
        jobId,
        userId,
        cv,
        rtw,
        validId,
      } = req.body;
      if (
        !email ||
        !fullname ||
        !moveIn ||
        !address ||
        !jobId ||
        !userId ||
        !cv ||
        !rtw ||
        !validId
      ) {
        return res.status(422).json({ error: "Please fill all fields" });
      }

      const search = await Application.findOne({
        userId: userId,
      });

      //console.log(search);

      if (search?.jobId === jobId) {
        return res
          .status(422)
          .json({ error: "You already applied for this job!" });
      }

      const newApplication = await new Application({
        email,
        fullname,
        moveIn,
        address,
        jobId,
        userId,
        cv,
        rtw,
        validId,
      }).save();

      res.status(201).json({
        status: "Application was successfully!",
        //result: newJob,
      });
    }
  } catch (error) {
    console.log(error);
  }
};
