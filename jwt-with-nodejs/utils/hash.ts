import crypto from "node:crypto";

function generateSalt(length: number) {
  return crypto.randomBytes(length).toString("hex");
}

export function hashPassword(password: string) {
  const salt = generateSalt(16);

  const hash = crypto.createHmac("sha256", salt).update(password).digest("hex");

  return hash;
}

export function comparePassword(input: string, password: string) {
  const salt = generateSalt(16);

  const hash = crypto.createHmac("sha256", salt).update(input).digest("hex");

  const match = password === hash

  return match;
}
