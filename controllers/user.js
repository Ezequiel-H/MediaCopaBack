import User from "../models/user.js";

export const createUser = async (_, res) => {
  const user = User.create();
  res.send(user);
};
