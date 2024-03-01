import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
  },
  passwordHash: {
    type: String,
  },
});

const User = mongoose.model("user", userSchema);

export default User;
