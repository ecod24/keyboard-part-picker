import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Products({ API }) {
	const [switches, setSwitches] = useState([]);
	useEffect(() => {
		axios
			.get(`${API}/switches`)
			.then((response) => {
				setSwitches(response.data.payload);
			})
			.catch((error) => console.log(error));
	}, []);
	return (
		<div>
			{switches.map((singleSwitch) => {
				return <p>{singleSwitch.name}</p>;
			})}
		</div>
	);
}
