// models/User.js (or wherever you choose to place your models)

// using for login
import mongoose from "mongoose";

const googleSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
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
export default mongoose.models.Google || mongoose.model("Google", googleSchema);
