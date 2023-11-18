const express = require("express");
const {
	getAllKeycaps,
	getKeycap,
	updateKeycap,
	createKeycap,
	deleteKeycap,
} = require("../queries/KeycapsQueries");
const keycapController = express();

keycapController.get("/", async (request, response) => {
	const allKeycaps = await getAllKeycaps();
	if (allKeycaps[0]) {
		response.status(200).json({
			success: true,
			payload: allKeycaps,
		});
	} else {
		response.status(500).json();
	}
});

keycapController.get("/:id", async (request, response) => {
	const { id } = request.params;
	const keycap = await getKeycap(id);
	if (keycap.id) {
		response.status(200).json({
			success: true,
			payload: keycap,
		});
	} else {
		response.status(404).json({
			success: false,
			id: id,
			payload: `not found: no keycap is listed at id${id}`,
		});
	}
});

keycapController.delete("/:id", async (request, response) => {
	const { id } = request.params;
	const deletedKeycap = await deleteKeycap(id);
	if (deletedKeycap) {
		if (deletedKeycap.id) {
			response.status(200).json({
				success: true,
				payload: deletedKeycap,
			});
		} else {
			response.status(404).json({
				success: false,
				payload: deletedKeycap,
			});
		}
	} else {
		response.status(500).json({
			success: false,
			payload: deletedKeycap,
		});
	}
});

keycapController.post("/", async (request, response) => {
	try {
		const keycap = await createKeycap(request.body);
		response.json({
			success: true,
			payload: keycap,
		});
	} catch (error) {
		return error;
	}
});

keycapController.put("/:id", async (request, response) => {
	try {
		const { id } = request.params;
		const keycaps = await updateKeycap(id, request.body);
		response.json({
			success: true,
			payload: keycaps,
		});
	} catch (error) {
		return error;
	}
});

module.exports = keycapController;
