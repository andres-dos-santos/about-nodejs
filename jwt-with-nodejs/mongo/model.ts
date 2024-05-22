import mongoose from "mongoose";

import { userSchema } from "./schema";

export const userModel = mongoose.model("users", userSchema);
