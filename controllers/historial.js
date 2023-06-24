import Meetings from "../models/meeting.js";

export const getHistorial = async (req, res) => {
  const historial = await Meetings.find({});
  res.send(historial);
};
