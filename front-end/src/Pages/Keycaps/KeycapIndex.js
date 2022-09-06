import axios from "axios";
import React, { useEffect, useState } from "react";
import Keycaps from "../../Components/Keycaps";
import { Link } from "react-router-dom";

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
			<Link className="add" to="/products/keycaps/new">
				Add custom Keycap Set
			</Link>
			<br />
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Brand</th>
						<th>Colors</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>
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
				</tbody>
			</table>
		</div>
	);
}
