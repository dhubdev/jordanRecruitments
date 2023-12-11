import mongoose from "mongoose";

const adminSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true, //To update user, remove the required password for Oauth to work
  },

  isAdmin: {
    type: Boolean,
  },
});

export default mongoose.models.Admin || mongoose.model("Admin", adminSchema);
