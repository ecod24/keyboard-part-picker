import { KeycapModel } from "../models/KeycapModel";

import db from "../db/dbConfig";

export const getAllKeycaps = async () => {
	try {
		return await db.any("SELECT * FROM keycaps");
	} catch (error) {
		return error;
	}
};

export const getKeycap = async (id) => {
	try {
		let keycapModel: KeycapModel;
		return await db.one("SELECT * FROM keycaps WHERE id=$1", id);
		// keycapModel.brand = test.brand;
		// keycapModel.colors = test.colors;
		// keycapModel.id = id;
		// keycapModel.layout_compatibility = test.layout_compatibility;
		// keycapModel.name = test.name;
		// keycapModel.price = test.price;
		// keycapModel.profile = test.profile;
		// return keycapModel;
	} catch (error) {
		return error;
	}
};

export const createKeycap = async (keycap: KeycapModel) => {
	try {
		let { name, brand, price, colors, profile, layout_compatibility } = keycap;
		return await db.one(
			"INSERT INTO keycaps (name, brand, price, colors, profile, layout_compatibility) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
			[name, brand, price, colors, profile, layout_compatibility]
		);
	} catch (error) {
		return error;
	}
};

export const updateKeycap = async (id, keycap: KeycapModel) => {
	let { name, brand, price, colors, profile, layout_compatibility } = keycap;
	try {
		return await db.one(
			"UPDATE keycaps SET name=$1, brand=$2, price=$3, colors=$4, profile=$5, layout_compatibility=$6 WHERE id=$7 RETURNING *",
			[name, brand, price, colors, profile, layout_compatibility, id]
		);
	} catch (error) {
		return error;
	}
};

export const deleteKeycap = async (id) => {
	try {
		return await db.one("DELETE FROM keycaps WHERE id=$1 RETURNING *", id);
	} catch (error) {
		return error;
	}
};

// module.exports = {
	// getAllKeycaps,
	// getKeycap,
	// createKeycap,
	// updateKeycap,
	// deleteKeycap,
// };
