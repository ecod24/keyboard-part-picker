import axios from "axios";
import React, { useEffect, useState } from "react";
import Keyswitch from "../../Components/Keyswitch";

export default function SwitchIndex({ API, currentBuild, setCurrentBuild }) {
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
		<div className="switches-index">
			{switches.map((item, index) => {
				return (
					<Keyswitch
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
