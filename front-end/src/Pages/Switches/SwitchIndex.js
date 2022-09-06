import axios from "axios";
import React, { useEffect, useState } from "react";
import Keyswitch from "../../Components/Keyswitch";
import { Link } from "react-router-dom";

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
			<Link className="add" to="/products/switches/new">
				Add Switch
			</Link>
			<br />
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Brand</th>
						<th>Type</th>
						<th>Force</th>
						<th>Pre-Lubed</th>
					</tr>
				</thead>
				<tbody>
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
				</tbody>
			</table>
		</div>
	);
}
