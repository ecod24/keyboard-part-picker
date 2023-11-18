// const express = require("express");
import express, { Request, Response } from "express";
const app = express();
const cors = require("cors");
const keyboardsController = require("./controllers/KeyboardsController");
const switchesController = require("./controllers/SwitchesController");
const keycapsController = require("./controllers/KeycapsController");
const buildsController = require("./controllers/BuildsController");

app.use(cors());
app.use(express.json());

app.get("/hello", (request: Request, response: Response) => {
	response.status(200).send("hello!");
});

app.use("/keycaps", keycapsController);
app.use("/keyboards", keyboardsController);
app.use("/switches", switchesController);
app.use("/builds", buildsController);

app.get("*", (request: Request, response: Response) => {
	response.status(404).json(`route does not exist.`);
});

module.exports = app;
