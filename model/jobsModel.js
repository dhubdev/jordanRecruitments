import mongoose from "mongoose";

const jobSchema = mongoose.Schema({
  userId: {
    type: String,
  },

  title: {
    type: String,
  },
  pay: {
    type: String,
  },

  type: {
    type: String,
  },

  desc: {
    type: String,
  },

  location: {
    type: String,
  },

  duration: {
    type: String,
  },

  apps: {
    type: Number,
  },

  datePosted: {
    type: String,
  },
});

export default mongoose.models.Job || mongoose.model("Job", jobSchema);
