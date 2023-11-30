import mongoose from "mongoose";

mongoose.set("strictQuery", true);

const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }
  mongoose
    .connect(process.env.MONGODB_URI)
    .then((con) => console.log("connected to DB"));
};

export default connectDB;
