const db = require("../db/dbConfig.js");

const getAllKeyboards = async () => {
	try {
		return await db.any("SELECT * FROM keyboards");
	} catch (error) {
		return error;
	}
};

const getKeyboard = async (id) => {
	try {
		return await db.one("SELECT * FROM keyboards WHERE id=$1", id);
	} catch (error) {
		return error;
	}
};

const createKeyboard = async (keyboard) => {
	try {
		let { name, brand, layout, price } = keyboard;
		return await db.one(
			"INSERT INTO keyboards (name, brand, layout, price) VALUES ($1, $2, $3, $4) RETURNING *",
			[name, brand, layout, price]
		);
	} catch (error) {
		return error;
	}
};

const updateKeyboard = async (id, keyboard) => {
	let { name, brand, layout, price } = keyboard;
	try {
		return await db.one(
			"UPDATE keyboards SET name=$1, brand=$2, layout=$3, price=$4 WHERE id=$5 RETURNING *",
			[name, brand, layout, price, id]
		);
	} catch (error) {
		return error;
	}
};

const deleteKeyboard = async (id) => {
	try {
		return await db.one("DELETE FROM keyboards WHERE id=$1 RETURNING *", id);
	} catch (error) {
		return error;
	}
};

module.exports = {
	getAllKeyboards,
	getKeyboard,
	createKeyboard,
	updateKeyboard,
	deleteKeyboard,
};
