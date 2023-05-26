import { PLACES_KEYS } from "../constants/places.js";
import { schema as Schema, mongoose } from "../db.js";

export const schema = new Schema(
  {
    lat: Number,
    lon: Number,
    streetAddress: String,
    type: {
      type: String,
      enum: Object.values(PLACES_KEYS),
      default: PLACES_KEYS.ADDRESS,
    },
    name: String,
  },
  { timestamps: true }
);

export default mongoose.model("Address", schema);
