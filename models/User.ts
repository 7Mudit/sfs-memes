// models/User.js (or wherever you choose to place your models)

// using for login
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// To ensure that we don't create multiple models in Next.js due to hot-reloading
export default mongoose.models.User || mongoose.model("User", userSchema);
