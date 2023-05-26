import Address from "../models/address.js";

export const mapBodyToMeeting = async ({ type, addresses }) => {
  const mappedAddresses = addresses.map((address) => {
    return Address.create(address);
  });
  const createdAddresses = await Promise.all(mappedAddresses);
  return { type, addresses: createdAddresses };
};
