/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-cycle */
import { createUser } from "./controllers/user.js";

export default (app) => {
  app.get("/health", (req, res) => {
    res.send("Healthy!");
  });

  app.post("/user", createUser);

  app.get("/historial", (req, res) => {
    console.log("Got a GET request for /list_user");
    res.send("Page Listing");
  });

  app.post("/historial", (req, res) => {
    console.log("Got a GET request for /list_user");
    res.send("Page Listing");
  });

  app.get("/punto_medio", (req, res) => {
    console.log("Got a GET request for /list_user");
    res.send("Page Listing");
  });

  app.get("/punto_medio/:id", (req, res) => {
    console.log("Got a GET request for /list_user");
    res.send("Page Listing");
  });
};
