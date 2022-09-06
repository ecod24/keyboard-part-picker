import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Guides({ API }) {
	const [keyboard, setKeyboard] = useState({});
	const [switches, setSwitches] = useState({});
	const [keycaps, setKeycaps] = useState({});

	useEffect(() => {
		axios
			.get(`${API}/switches`)
			.then((response) => {
				setSwitches(response.data.payload[0]);
			})
			.catch((error) => {
				console.log(error);
			});
		axios
			.get(`${API}/keyboards`)
			.then((response) => {
				setKeyboard(response.data.payload[0]);
			})
			.catch((error) => {
				console.log(error);
			});
		axios
			.get(`${API}/keycaps`)
			.then((response) => {
				setKeycaps(response.data.payload[0]);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<div>
			(WORK IN PROGRESS)
			<div>
				<h2>The "Best Budget Build in the World"</h2>
				<p>
					Simple. Best value switches, best value keyboard, and your choice of switches.
					We've provided our pick for a good value pickup that doesn't break the bank.
				</p>
				<table>
					<thead>
						<tr>
							<th>Component</th>
							<th>Selection</th>
							<th>Price</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<Link to="/products/keyboards">Keyboard (Case)</Link>
							</td>
							<td>
								<Link to={`/products/keyboards/${keyboard.id}`}>
									<img src={keyboard.image} alt={keyboard.name} />
								</Link>
								<Link to={`/products/keyboards/${keyboard.id}`}>
									{keyboard.name}
								</Link>
							</td>
							<td>$ {keyboard.price}</td>
						</tr>
						<tr>
							<td>
								<Link to="/products/switches">Switches</Link>
							</td>
							<td>
								<Link to={`/products/switches/${switches.id}`}>
									<img src={switches.image} alt={switches.name} />
								</Link>
								<Link to={`/products/switches/${switches.id}`}>
									{switches.name}
								</Link>
							</td>
						</tr>
						<tr>
							<td>
								<Link to="/products/keycaps">Keycaps</Link>
							</td>
							<td>
								<Link to={`/products/keycaps/${keycaps.id}`}>
									<img src={keycaps.image} alt={keycaps.name} />
								</Link>
								<Link to={`/products/keycaps/${keycaps.id}`}>{keycaps.name}</Link>
							</td>
							<td>$ {keycaps.price}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}
