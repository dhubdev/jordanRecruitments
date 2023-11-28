import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  fullname: {
    type: String,
  },

  password: {
    type: String,
    required: true, //To update user, remove the required password for Oauth to work
  },

  phone: {
    type: String,
  },
});

export default mongoose.models.User || mongoose.model("User", userSchema);
