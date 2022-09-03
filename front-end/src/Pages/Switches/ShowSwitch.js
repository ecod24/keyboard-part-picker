import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function ShowSwitch({ API }) {
	const { id } = useParams();
	const [switchInfo, setSwitchInfo] = useState({});
	useEffect(() => {
		axios
			.get(`${API}/switches/${id}`)
			.then((response) => {
				setSwitchInfo(response.data.payload);
			})
			.catch((error) => {
				console.warn(error);
			});
	});
	return (
		<div>
			<h1>{switchInfo.name}</h1>
			<p>{switchInfo.brand}</p>
			<h2>${switchInfo.price}</h2>
			<img src={`${switchInfo.image}`} alt="its probably a switch" />
		</div>
	);
}
