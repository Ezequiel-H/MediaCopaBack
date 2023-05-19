import { schema as Schema, mongoose } from "../db.js";
import { schema as meetingSchema } from "./meeting.js";

const schema = new Schema(
  {
    history: [meetingSchema],
  },
  { timestamps: true }
);

export default mongoose.model("User", schema);
