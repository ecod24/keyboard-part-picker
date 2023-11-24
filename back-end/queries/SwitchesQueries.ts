import db from "../db/dbConfig";
import { SwitchModel } from "../models/SwitchModel.js";

export const getAllSwitches = async () => {
	try {
		return await db.any("SELECT * FROM switches");
	} catch (error) {
		return error;
	}
};

export const getSwitch = async (id) => {
	try {
		return await db.one("SELECT * FROM switches WHERE id=$1", id);
	} catch (error) {
		return error;
	}
};

export const createSwitch = async (keyswitch) => {
	try {
		let {
			name,
			brand,
			type,
			top_housing,
			bottom_housing,
			stem,
			travel_distance,
			force,
			three_pin,
			prelubed,
			image,
			price_per_switch,
		} = keyswitch;
		return await db.one(
			"INSERT INTO switches (name, brand, type, top_housing, bottom_housing, stem, travel_distance, force, three_pin, prelubed, image, price_per_switch) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *",
			[
				name,
				brand,
				type,
				top_housing,
				bottom_housing,
				stem,
				travel_distance,
				force,
				three_pin,
				prelubed,
				image,
				price_per_switch,
			]
		);
	} catch (error) {
		return error;
	}
};

export const updateSwitch = async (id, keyswitch) => {
	let {
		name,
		brand,
		type,
		top_housing,
		bottom_housing,
		stem,
		travel_distance,
		force,
		three_pin,
		prelubed,
		image,
		price_per_switch,
	} = keyswitch;
	try {
		return await db.one(
			"UPDATE switches SET name=$1, brand=$2, type=$3, top_housing=$4, bottom_housing=$5, stem=$6, travel_distance=$7, force=$8, three_pin=$9, prelubed=$10, image=$11, price_per_switch=$12 WHERE id=$13 RETURNING *",
			[
				name,
				brand,
				type,
				top_housing,
				bottom_housing,
				stem,
				travel_distance,
				force,
				three_pin,
				prelubed,
				image,
				price_per_switch,
				id,
			]
		);
	} catch (error) {
		return error;
	}
};

export const deleteSwitch = async (id) => {
	try {
		return await db.one("DELETE FROM switches WHERE id=$1 RETURNING *", id);
	} catch (error) {
		return error;
	}
};

// module.exports = {
// 	getAllSwitches,
// 	getSwitch,
// 	createSwitch,
// 	updateSwitch,
// 	deleteSwitch,
// };
