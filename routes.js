import { createAddress } from "./controllers/addresses.js";
import { getMeeting } from "./controllers/meeting.js";
import { createUser } from "./controllers/user.js";

export default (app) => {
  app.get("/health", (req, res) => {
    res.send("Healthy!");
  });

  app.post("/user", createUser);

  app.post("/address", createAddress);

  app.get("/historial", (req, res) => {
    console.log("Got a GET request for /list_user");
    res.send("Page Listing");
  });

  // PATCH
  app.delete("/historial", (req, res) => {
    console.log("obtener el array de ids");
    res.send("Page Listing");
  });

  app.get("/punto_medio", getMeeting);

  app.get("/punto_medio/:id", (req, res) => {
    console.log("Got a GET request for /list_user");
    res.send("Page Listing");
  });
};
