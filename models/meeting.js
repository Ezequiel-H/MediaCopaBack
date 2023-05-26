import { PLACES_KEYS } from "../constants/places.js";
import { schema as Schema, mongoose } from "../db.js";
import { schema as addressSchema } from "./address.js";

export const schema = new Schema(
  {
    meetingAddress: addressSchema,
    addresses: [addressSchema],
  },
  { timestamps: true }
);

export default mongoose.model("Meeting", schema);
