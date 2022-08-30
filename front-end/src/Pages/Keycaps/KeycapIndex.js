import axios from "axios";
import React, { useEffect, useState } from "react";
import Keycaps from "../../Components/Keycaps";

export default function KeycapIndex({ API, currentBuild, setCurrentBuild }) {
	const [keycaps, setKeycaps] = useState([]);
	useEffect(() => {
		axios
			.get(`${API}/keycaps`)
			.then((response) => {
				setKeycaps(response.data.payload);
			})
			.catch((error) => {
				console.log(error);
			});
	});
	return (
		<div className="keycaps-index">
			{keycaps.map((item, index) => {
				return (
					<Keycaps
						info={item}
						key={index}
						currentBuild={currentBuild}
						setCurrentBuild={setCurrentBuild}
					/>
				);
			})}
		</div>
	);
}
