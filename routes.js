import { createAddress } from "./controllers/addresses.js";
import { deleteFromHistorial, getHistorial } from "./controllers/historial.js";
import { getMeeting } from "./controllers/meeting.js";
import { createUser } from "./controllers/user.js";

export default (app) => {
  app.get("/health", (req, res) => {
    res.send("Healthy!");
  });

  app.post("/user", createUser);

  app.post("/address", createAddress);

  app.get("/historial", getHistorial);

  // PATCH
  app.delete("/historial/:id", deleteFromHistorial);

  app.post("/punto_medio", getMeeting);

  app.get("/punto_medio/:id", (req, res) => {
    console.log("Got a GET request for /list_user");
    res.send("Page Listing");
  });
};
