import Address from "../models/address.js";

export const createAddress = async (req, res) => {
  const address = Address.create(req.body);
  res.send(address);
};
