//
import jwt from "jsonwebtoken";
import type { Types } from "mongoose";

type Payload = {
  email: string;
  id: Types.ObjectId;
};

export function generateJWT(payload: Payload) {
  jwt.sign(payload, process.env.JSONWEBTOKEN_SECRET_KEY ?? "", {
    expiresIn: "1d",
  });
}
