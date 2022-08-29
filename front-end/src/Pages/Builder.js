import React from "react";
import { Link } from "react-router-dom";

export default function Builder(props) {
	const { API, currentBuild, setCurrentBuild, removeFromCart } = props;

	return (
		<div className="partlist">
			<table>
				<thead>
					<tr>
						<th>Component</th>
						<th>Selection</th>
						<th>Base Price</th>
						<th>Shipping</th>
						<th>Total Price</th>
						<th>Where to Buy</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							<Link to="/products/keyboards">Keyboard (Case)</Link>
						</td>
					</tr>
					<tr>
						<td>
							<Link to="/products/switches">Switches</Link>
						</td>
					</tr>
					<tr>
						<td>
							<Link to="/products/keycaps">Keycaps</Link>
						</td>
					</tr>
					<tr>
						<td>PCB</td>
					</tr>
					<tr>
						<td>Stabilizers </td>
					</tr>
					<tr>
						<td>PCB Plate </td>
					</tr>
					<tr>
						<td>Add Custom Mods </td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}
