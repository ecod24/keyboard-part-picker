const express = require("express");
const {
	getBuild,
	getAllBuilds,
	getBuildsByUserID,
	getBuildsBySwitchesID,
	getBuildsByKeycapsID,
	getBuildsByKeyboardID,
	createBuild,
	updateBuild,
	deleteBuild,
} = require("../queries/builds");
const buildsController = express();

buildsController.get("/", async (request, response) => {
	//whether by UserID/KBID/SwID/KcID, go here?
	const { keyboard_id, switches_id, keycaps_id, user_id } = request.query;
	if (keyboard_id) {
		//make a request to getBuildsByKeyboardID
		const allBuilds = await getBuildsByKeyboardID(keyboard_id);
		if (allBuilds[0]) {
			response.status(200).json({
				success: true,
				payload: allBuilds,
			});
		} else {
			response.status(500).json();
		}
	} else if (switches_id) {
		//make a request to getBuildsBySwitchesID
		const allBuilds = await getBuildsBySwitchesID(switches_id);
		if (allBuilds[0]) {
			response.status(200).json({
				success: true,
				payload: allBuilds,
			});
		} else {
			response.status(500).json();
		}
	} else if (keycaps_id) {
		const allBuilds = await getBuildsByKeycapsID(keycaps_id);
		if (allBuilds[0]) {
			response.status(200).json({
				success: true,
				payload: allBuilds,
			});
		} else {
			response.status(500).json();
		}
	} else if (user_id) {
		const allBuilds = await getBuildsByUserID(user_id);
		if (allBuilds[0]) {
			response.status(200).json({
				success: true,
				payload: allBuilds,
			});
		} else {
			response.status(500).json();
		}
	} else {
		const allBuilds = await getAllBuilds();
		if (allBuilds[0]) {
			response.status(200).json({
				success: true,
				payload: allBuilds,
			});
		} else {
			response.status(500).json();
		}
	}
});

buildsController.get("/:id", async (request, response) => {
	const { id } = request.params;
	const build = await getBuild(id);
	if (build.id) {
		response.status(200).json({
			success: true,
			payload: build,
		});
	} else {
		response.status(404).json({
			success: false,
			id: id,
			payload: `NOT FOUND: No build found with id ${id}`,
			error: build,
		});
	}
});
buildsController.post("/", async (request, response) => {
	try {
		const build = await createBuild(request.body);
		response.json({
			success: true,
			payload: build,
		});
	} catch (error) {
		response.status(500).json({
			success: false,
			payload: error,
		});
	}
});
buildsController.put("/:id", async (request, response) => {
	try {
		const { id } = request.params;
		const build = await updateBuild(request.body, id);
		response.json({
			success: true,
			payload: build,
		});
	} catch (error) {
		response.status(500).json({
			success: false,
			payload: error,
		});
	}
});
buildsController.delete("/:id", async (request, response) => {
	const { id } = request.params;
	const deletedBuild = await deleteBuild(id);
	if (deletedBuild) {
		if (deletedBuild.id) {
			response.status(200).json({
				success: true,
				payload: deletedBuild,
			});
		} else {
			response.status(404).json({
				success: false,
				payload: deletedBuild,
			});
		}
	} else {
		response.status(500).json({
			success: false,
			payload: deletedBuild,
		});
	}
});

module.exports = buildsController;
