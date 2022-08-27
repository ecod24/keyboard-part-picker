const db = require("../db/dbConfig.js");
const getAllKeycaps = async () => {
	try {
		return await db.any("SELECT * FROM keycaps");
	} catch (error) {
		return error;
	}
};

const getKeycap = async (id) => {
	try {
		return await db.one("SELECT * FROM keycaps WHERE id=$1", id);
	} catch (error) {
		return error;
	}
};

const createKeycap = async (keycap) => {
	try {
		let { name, brand, price, color, image } = keycap;
		//TODO: defaults logic here
		return await db.one(
			"INSERT INTO keycaps (name, brand, price, color, image) VALUES ($1, $2, $3, $4, $5) RETURNING *",
			[name, brand, price, color, image]
		);
	} catch (error) {
		return error;
	}
};

const updateKeycap = async (id, keycap) => {
	let { name, brand, price, color, image } = keycap;
	try {
		return await db.one(
			"UPDATE keycaps SET name=$1, brand=$2, price=$3, color=$4, image=$5 WHERE id=$6 RETURNING *",
			[name, brand, price, color, image, id]
		);
	} catch (error) {
		return error;
	}
};

const deleteKeycap = async (id) => {
	try {
		return await db.one("DELETE FROM keycaps WHERE id=$1 RETURNING *", id);
	} catch (error) {
		return error;
	}
};

module.exports = {
	getAllKeycaps,
	getKeycap,
	createKeycap,
	updateKeycap,
	deleteKeycap,
};
