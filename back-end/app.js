const express = require("express");
const app = express();
const cors = require("cors");
const keyboardsController = require("./controllers/keyboards");
const switchesController = require("./controllers/switches");
const keycapsController = require("./controllers/keycaps");

app.use(cors());
app.use(express.json());

app.get("/", (request, response) => {
	response.send("hi"); //TODO:base backend route: show these people what routes they have access to!
});

app.use("/keycaps", keycapsController);
app.use("/keyboards", keyboardsController);
app.use("/switches", switchesController);

app.get("*", (request, response) => {
	response.status(404).json({ status: "this route does not exist. please try again" });
});

module.exports = app;
