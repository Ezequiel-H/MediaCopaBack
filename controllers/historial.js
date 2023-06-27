import Meetings from "../models/meeting.js";

export const getHistorial = async (req, res) => {
  const historial = await Meetings.find({});
  res.send(historial);
};

export const deleteFromHistorial = async (req, res) => {
  console.log(req.params.id);
  await Meetings.deleteOne({ _id: req.params.id });
  res.send(req.params.id.toString());
};
