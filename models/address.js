import { schema as Schema, mongoose } from "../db.js";

export const schema = new Schema(
  {
    lat: Number,
    lon: Number,
    streetAddress: String,
  },
  { timestamps: true }
);

export default mongoose.model("Address", schema);
