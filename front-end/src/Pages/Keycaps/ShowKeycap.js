import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function ShowKeycap({ API }) {
	const { id } = useParams();
	const [keycapInfo, setKeycapInfo] = useState({});
	useEffect(() => {
		axios
			.get(`${API}/keycaps/${id}`)
			.then((response) => {
				setKeycapInfo(response.data.payload);
			})
			.catch((error) => {
				console.warn(error);
			});
	});
	return (
		<div>
			<h1>{keycapInfo.name}</h1>
			<p>{keycapInfo.brand}</p>
			<h2>{keycapInfo.price}</h2>
		</div>
	);
}
