import express, { Request, Response } from "express";
import {
	getAllKeyboards,
	getKeyboard,
	updateKeyboard,
	createKeyboard,
	deleteKeyboard,
	searchForKeyboardByKeyword,
} from "../queries/KeyboardsQueries";
const keyboardController = express();

keyboardController.get("/", async (request: Request, response: Response) => {
	const allKeyboards = await getAllKeyboards();
	if (allKeyboards[0]) {
		response.status(200).json({
			success: true,
			payload: allKeyboards,
		});
	} else {
		response.status(500).json();
	}
});

keyboardController.get("/search", async (request: Request, response: Response) => {
	const { name } = request.query;
	const searchResult = await searchForKeyboardByKeyword(name);
	if (searchResult[0]) {
		response.status(200).json({
			success: true,
			payload: searchResult,
		});
	} else {
		response.status(500).json({
			success: false,
			query: name,
			payload: searchResult,
		});
	}
});

keyboardController.get("/:id", async (request: Request, response: Response) => {
	const { id } = request.params;
	const keyboard = await getKeyboard(id);
	if (keyboard.id) {
		response.status(200).json({
			success: true,
			payload: keyboard,
		});
	} else {
		response.status(404).json({
			success: false,
			id: id,
			payload: `not found: no keyboard is listed at id${id}`,
		});
	}
});

keyboardController.delete("/:id", async (request: Request, response: Response) => {
	const { id } = request.params;
	const deletedKeyboard = await deleteKeyboard(id);
	if (deletedKeyboard) {
		if (deletedKeyboard.id) {
			response.status(200).json({
				success: true,
				payload: deletedKeyboard,
			});
		} else {
			response.status(404).json({
				success: false,
				payload: deletedKeyboard,
			});
		}
	} else {
		response.status(500).json({
			success: false,
			payload: deletedKeyboard,
		});
	}
});

keyboardController.post("/", async (request: Request, response: Response) => {
	try {
		const keyboard = await createKeyboard(request.body);
		response.json({
			success: true,
			payload: keyboard,
		});
	} catch (error) {
		return error;
	}
});

keyboardController.put("/:id", async (request: Request, response: Response) => {
	try {
		const { id } = request.params;
		const keyboards = await updateKeyboard(id, request.body);
		response.json({
			success: true,
			payload: keyboards,
		});
	} catch (error) {
		return error;
	}
});

export default keyboardController;
