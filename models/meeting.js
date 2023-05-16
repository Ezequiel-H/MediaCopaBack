/* eslint-disable import/extensions */
import { PLACES_KEYS } from "../constants/places.js";
import { schema as Schema, mongoose } from "../db.js";
import { schema as addressSchema } from "./address.js";

export const schema = new Schema(
  {
    meetingAddress: addressSchema,
    addesses: [addressSchema],
    type: {
      type: String,
      enum: Object.values(PLACES_KEYS),
    },
  },
  { timestamps: true }
);

export default mongoose.model("Meeting", schema);
