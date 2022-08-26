import React from "react";

export default function Builder() {
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
						<td>Keyboard (Case) </td>
					</tr>
					<tr>
						<td>Switches </td>
					</tr>
					<tr>
						<td>Keycaps </td>
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
