import "dotenv/config";
import express from "express";

import { connect } from "./mongo/connection";
import { userModel } from "./mongo/model";

import { comparePassword, hashPassword } from "./utils/hash";
import { generateJWT } from "./utils/token";

const route = express();

route.use(express.json());

connect();

route.post("/user/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await userModel.findOne({ email });
  console.log(user)

  /**if (user) {
    if (!comparePassword(password, user.password)) {
      return res
        .status(401)
        .json({ message: "Password and/or email are incorrect." });
    }

    const jwt = generateJWT({ email, id: user._id });

    return res.status(200).json({ jwt });
  } */

  return res
    .status(401)
    .json({ message: "Password and/or email are incorrect." });
});

route.post("/user", async (req, res) => {
  const { email, name, password } = req.body;

  const users = await userModel.find();

  if (!users.some((user) => user.email === email)) {
    const passwordHashed = hashPassword(password);

    await userModel.create({ name, email, password: passwordHashed });

    return res.status(201).json({ created: true });
  }

  return res
    .status(400)
    .json({ message: "There is already a user with this email." });
});

route.get("/user", async (_, res) => {
  const users = await userModel.find();

  return res.json(users);
});

route.delete("/user/:id", async (req, res) => {
  const id = req.params.id;

  await userModel.findByIdAndDelete(id);

  return res.status(204).json({ message: "Successfully removed." });
});

route.listen(3333, () => {
  console.log("Server is running!");
});
