import React from "react";
import { Link } from "react-router-dom";

export default function Builder(props) {
	const { currentBuild } = props;

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
						<td>
							{" "}
							{currentBuild.keyboard === null ? (
								<Link to="/products/keyboards">Choose a Keyboard</Link>
							) : (
								<Link to={`/products/keyboards/${currentBuild.keyboard.id}`}>
									{currentBuild.keyboard.name}
								</Link>
							)}{" "}
						</td>
					</tr>
					<tr>
						<td>
							<Link to="/products/switches">Switches</Link>
						</td>
						<td>
							{currentBuild.switches === null ? (
								<Link to="/products/switches">Choose Switches</Link>
							) : (
								<Link to={`/products/switches/${currentBuild.switches.id}`}>
									{currentBuild.switches.name}
								</Link>
							)}
						</td>
					</tr>
					<tr>
						<td>
							<Link to="/products/keycaps">Keycaps</Link>
						</td>
						<td>
							{currentBuild.keycaps === null ? (
								<Link to="/products/keycaps">Choose a Keycap Set</Link>
							) : (
								<Link to={`/products/keycaps/${currentBuild.keycaps.id}`}>
									{currentBuild.keycaps.name}
								</Link>
							)}
						</td>
					</tr>
					{/* <tr>
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
					</tr> */}
				</tbody>
			</table>
		</div>
	);
}
