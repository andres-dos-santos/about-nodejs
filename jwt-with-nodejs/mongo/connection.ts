import mongoose from "mongoose";

const MONGODB_PASSWORD = process.env.MONGODB_PASSWORD;

export function connect() {
  mongoose
    .connect(
      `mongodb+srv://admin:${MONGODB_PASSWORD}@cluster.zai7xrw.mongodb.net/`
    )
    .then(() => console.log("Database is running!"));
}
