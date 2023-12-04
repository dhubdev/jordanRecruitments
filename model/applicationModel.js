import mongoose from "mongoose";

const applicationSchema = mongoose.Schema({
  userId: {
    type: String,
  },

  jobId: {
    type: String,
  },
  email: {
    type: String,
  },
  fullname: {
    type: String,
  },

  address: {
    type: String,
  },

  moveIn: {
    type: String,
  },

  cv: {
    type: String,
  },

  rtw: {
    type: String,
  },

  validId: {
    type: String,
  },
});

export default mongoose.models.Application ||
  mongoose.model("Application", applicationSchema);
