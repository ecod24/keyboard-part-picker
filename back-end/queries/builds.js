const db = require("../db/dbConfig.js");

const getAllBuilds = async () => {
	try {
		return await db.any("SELECT * FROM builds");
	} catch (error) {
		return error;
	}
};

const getBuild = async (id) => {
	try {
		return await db.any(`SELECT * FROM builds WHERE id=${id}`);
	} catch (error) {
		return error;
	}
};

const createBuild = async (build) => {
	try {
		let { title, keyboard_id, switches_id, keycaps_id, builder_id, total_price, images } =
			build;
		return await db.one(
			`INSERT INTO builds (title, keyboard_id, switches_id, keycaps_id, builder_id, total_price, images) VALUES ('${title}', ${keyboard_id}, ${switches_id}, ${keycaps_id}, ${builder_id}, ${total_price}, '${images}') RETURNING *`
		);
	} catch (error) {
		console.log(error);
		throw error;
	}
};

const updateBuild = async (build, id) => {
	try {
		let { title, keyboard_id, switches_id, keycaps_id, total_price, images } = build;
		return await db.one(
			`UPDATE builds SET title='${title}', keyboard_id=${keyboard_id}, switches_id=${switches_id}, keycaps_id=${keycaps_id}, total_price=${total_price}, images='${images}' WHERE id=${id} RETURNING *`
		);
	} catch (error) {
		return error;
	}
};

const deleteBuild = async (id) => {
	try {
		return await db.one(`DELETE FROM builds WHERE id=${id} RETURNING *`);
	} catch (error) {
		return error;
	}
};

const getBuildsByUserID = async (id) => {
	try {
		return await db.any(`SELECT * FROM builds WHERE builder_id=${id}`);
	} catch (error) {
		return error;
	}
};
const getBuildsByKeyboardID = async (id) => {
	try {
		return await db.any(`SELECT * FROM builds WHERE keyboard_id=${id}`);
	} catch (error) {
		return error;
	}
};
const getBuildsBySwitchesID = async (id) => {
	try {
		return await db.any(`SELECT * FROM builds WHERE switches_id=${id}`);
	} catch (error) {
		return error;
	}
};
const getBuildsByKeycapsID = async (id) => {
	try {
		return await db.any(`SELECT * FROM builds WHERE keycaps_id=${id}`);
	} catch (error) {
		return error;
	}
};
module.exports = {
	getAllBuilds,
	getBuild,
	createBuild,
	updateBuild,
	deleteBuild,
	getBuildsByUserID,
	getBuildsByKeyboardID,
	getBuildsBySwitchesID,
	getBuildsByKeycapsID,
};
