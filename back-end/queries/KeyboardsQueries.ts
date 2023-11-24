import db from "../db/dbConfig";

export const getAllKeyboards = async () => {
	try {
		return await db.any("SELECT * FROM keyboards");
	} catch (error) {
		return error;
	}
};

export const getKeyboard = async (id) => {
	try {
		return await db.one("SELECT * FROM keyboards WHERE id=$1", id);
	} catch (error) {
		return error;
	}
};

export const searchForKeyboardByKeyword = async (query) => {
	try {
		return await db.any("SELECT * FROM keyboards WHERE name LIKE '%$1%'", query);
	} catch (error) {
		return error;
	}
};

export const createKeyboard = async (keyboard) => {
	try {
		let { name, brand, layout, price, image, color, description } = keyboard;
		return await db.one(
			"INSERT INTO keyboards (name, brand, layout, price, image, color, description) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
			[name, brand, layout, price, image, color, description]
		);
	} catch (error) {
		return error;
	}
};

export const updateKeyboard = async (id, keyboard) => {
	let { name, brand, layout, price, image, color, description } = keyboard;
	try {
		return await db.one(
			"UPDATE keyboards SET name=$1, brand=$2, layout=$3, price=$4, image=$5, color=$6, description=$7 WHERE id=$8 RETURNING *",
			[name, brand, layout, price, image, color, description, id]
		);
	} catch (error) {
		return error;
	}
};

export const deleteKeyboard = async (id) => {
	try {
		return await db.one("DELETE FROM keyboards WHERE id=$1 RETURNING *", id);
	} catch (error) {
		return error;
	}
};
