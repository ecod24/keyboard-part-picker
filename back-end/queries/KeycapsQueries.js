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
		let { name, brand, price, colors, profile, image, layout_compatibility } = keycap;
		return await db.one(
			"INSERT INTO keycaps (name, brand, price, colors, profile, image, layout_compatibility) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
			[name, brand, price, colors, profile, image, layout_compatibility]
		);
	} catch (error) {
		return error;
	}
};

const updateKeycap = async (id, keycap) => {
	let { name, brand, price, colors, profile, image, layout_compatibility } = keycap;
	try {
		return await db.one(
			"UPDATE keycaps SET name=$1, brand=$2, price=$3, colors=$4, profile=$5, image=$6, layout_compatibility=$7 WHERE id=$8 RETURNING *",
			[name, brand, price, colors, profile, image, layout_compatibility, id]
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
