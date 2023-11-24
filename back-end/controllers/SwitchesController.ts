import express, { Request, Response } from "express";
import {
	getAllSwitches,
	getSwitch,
	updateSwitch,
	createSwitch,
	deleteSwitch,
} from "../queries/SwitchesQueries";
const switchController = express();

switchController.get("/", async (request: Request, response: Response) => {
	const allSwitches = await getAllSwitches();
	if (allSwitches[0]) {
		response.status(200).json({
			success: true,
			payload: allSwitches,
		});
	} else {
		response.status(500).json();
	}
});

switchController.get("/:id", async (request: Request, response: Response) => {
	const { id } = request.params;
	const keyswitch = await getSwitch(id);
	if (keyswitch.id) {
		response.status(200).json({
			success: true,
			payload: keyswitch,
		});
	} else {
		response.status(404).json({
			success: false,
			id: id,
			payload: `not found: no switch is listed at id${id}`,
		});
	}
});

switchController.delete("/:id", async (request: Request, response: Response) => {
	const { id } = request.params;
	const deletedSwitch = await deleteSwitch(id);
	if (deletedSwitch) {
		if (deletedSwitch.id) {
			response.status(200).json({
				success: true,
				payload: deletedSwitch,
			});
		} else {
			response.status(404).json({
				success: false,
				payload: deletedSwitch,
			});
		}
	} else {
		response.status(500).json({
			success: false,
			payload: deletedSwitch,
		});
	}
});

switchController.post("/", async (request: Request, response: Response) => {
	try {
		const switches = await createSwitch(request.body);
		response.json({
			success: true,
			payload: switches,
		});
	} catch (error) {
		return error;
	}
});

switchController.put("/:id", async (request: Request, response: Response) => {
	try {
		const { id } = request.params;
		const keyswitch = await updateSwitch(id, request.body);
		response.json({
			success: true,
			payload: keyswitch,
		});
	} catch (error) {
		return error;
	}
});

export default switchController;
