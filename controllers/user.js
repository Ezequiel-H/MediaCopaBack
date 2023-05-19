import User from "../models/user.js";

export const createUser = async (_, res) => {
  const user = new User();
  const newUser = await user.save();
  res.send(newUser);
};
