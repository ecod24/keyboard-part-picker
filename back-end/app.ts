import express, { Request, Response } from "express";
import cors from "cors";
import keyboardsController from "./controllers/KeyboardsController";
import keycapsController from "./controllers/KeycapsController";
import switchesController from "./controllers/SwitchesController";
import buildsController from "./controllers/BuildsController";

const app = express();
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

export default app;
