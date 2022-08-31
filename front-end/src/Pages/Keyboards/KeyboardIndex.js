import axios from "axios";
import React, { useEffect, useState } from "react";
import Keyboard from "../../Components/Keyboard";

export default function KeyboardIndex({ API, currentBuild, setCurrentBuild }) {
	const [keyboards, setKeyboards] = useState([]);
	useEffect(() => {
		axios
			.get(`${API}/keyboards`)
			.then((response) => {
				setKeyboards(response.data.payload);
			})
			.catch((error) => console.log(error));
	}, []);
	return (
		<div className="keyboard-index">
			{keyboards.map((item, index) => {
				return (
					<Keyboard
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
