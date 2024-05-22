import mongoose from "mongoose";

export const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is mandatory!"],
    },
    email: {
      type: String,
      required: [true, "Email is mandatory!"],
    },
    password: {
      type: String,
      required: [true, "Password is mandatory!"],
    },
  },
  { timestamps: true }
);
