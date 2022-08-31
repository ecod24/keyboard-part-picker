import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function ShowKeyboard({ API }) {
	const { id } = useParams();
	const [keyboardInfo, setKeyboardInfo] = useState({});
	useEffect(() => {
		axios
			.get(`${API}/keyboards/${id}`)
			.then((response) => {
				setKeyboardInfo(response.data.payload);
			})
			.catch((error) => console.warn(error));
	});
	return (
		<div>
			<h1>{keyboardInfo.name}</h1>
			<p>{keyboardInfo.brand}</p>
			<h2>${keyboardInfo.price}</h2>
		</div>
	);
}
