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
			"INSERT INTO keyboards (name, brand, layout, price, image) VALUES ($1, $2, $3, $4, $5) RETURNING *",
			[name, brand, layout, price, image]
		);
	} catch (error) {
		return error;
	}
};

const updateKeyboard = async (id, keyboard) => {
	let { name, brand, layout, price, image } = keyboard;
	try {
		return await db.one(
			"UPDATE keyboards SET name=$1, brand=$2, layout=$3, price=$4, image=$5 WHERE id=$6 RETURNING *",
			[name, brand, layout, price, image, id]
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
