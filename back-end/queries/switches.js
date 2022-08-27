const db = require("../db/dbConfig.js");
const getAllSwitches = async () => {
	try {
		return await db.any("SELECT * FROM switches");
	} catch (error) {
		return error;
	}
};

const getSwitch = async (id) => {
	try {
		return await db.one("SELECT * FROM switches WHERE id=$1", id);
	} catch (error) {
		return error;
	}
};

const createSwitch = async (keyswitch) => {
	try {
		let { name, brand, type, force, prelubed } = keyswitch;
		return await db.one(
			"INSERT INTO switches (name, brand, type, force, prelubed) VALUES ($1, $2, $3, $4, $5) RETURNING *",
			[name, brand, type, force, prelubed]
		);
	} catch (error) {
		return error;
	}
};

const updateSwitch = async (id, keyswitch) => {
	let { name, brand, type, force, prelubed } = keyswitch;
	try {
		return await db.one(
			"UPDATE switches SET name=$1, brand=$2, type=$3, force=$4, prelubed=$5 WHERE id=$6 RETURNING *",
			[name, brand, type, force, prelubed, id]
		);
	} catch (error) {
		return error;
	}
};

const deleteSwitch = async (id) => {
	try {
		return await db.one("DELETE FROM switches WHERE id=$1 RETURNING *", id);
	} catch (error) {
		return error;
	}
};

module.exports = {
	getAllSwitches,
	getSwitch,
	createSwitch,
	updateSwitch,
	deleteSwitch,
};
