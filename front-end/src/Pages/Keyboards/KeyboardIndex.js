import axios from "axios";
import React, { useEffect, useState } from "react";
import Keyboard from "../../Components/Keyboard/Keyboard";
import { Link } from "react-router-dom";

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
			<Link className="add" to="/products/keyboards/new">
				Add Custom Keyboard
			</Link>
			<br />
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Brand</th>
						<th>Layout</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>
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
				</tbody>
			</table>
		</div>
	);
}
