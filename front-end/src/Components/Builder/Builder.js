import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../App.css";

export default function Builder(props) {
	const { currentBuild } = props;
	const [totalPrice, setTotalPrice] = useState(0);

	const calculateSwitchPrices = (layout = "100%", pricePerSwitch) => {
		//TODO: all layouts
		let numOfKeys = 108; //default 100%
		let totalPriceForBoard = 0.0;
		if (layout === "60%") {
			totalPriceForBoard = 65 * pricePerSwitch;
		} else if (layout === "65%") {
			totalPriceForBoard = 68 * pricePerSwitch;
		} else if (layout === "TKL") {
			totalPriceForBoard = 87 * pricePerSwitch;
		} else if (layout === "75%") {
			totalPriceForBoard = 84 * pricePerSwitch;
		} else {
			totalPriceForBoard = numOfKeys * pricePerSwitch;
		}
		return Number(totalPriceForBoard.toFixed(2));
	};
	useEffect(() => {
		if (currentBuild.keyboard && currentBuild.switches) {
			currentBuild.switches["price"] = calculateSwitchPrices(
				currentBuild.keyboard.layout,
				currentBuild.switches.price_per_switch
			);
		}
		setTotalPrice(
			Object.entries(currentBuild)
				.reduce((prev, current) => {
					return prev + (current[1]?.price ? current[1]?.price : 0);
				}, 0)
				.toFixed(2)
		);
	}, [currentBuild.switches, currentBuild.keyboard]);
	return (
		<div className="partlist">
			<div>
				<h3> Total: ${totalPrice}</h3>
			</div>
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
							{" "}
							{currentBuild.keyboard === null ? (
								<Link to="/products/keyboards">Choose a Keyboard</Link>
							) : (
								<div className="icon-and-title">
									<Link to={`/products/keyboards/${currentBuild.keyboard.id}`}>
										<img
											className="keyboard-index-icon"
											src={
												currentBuild.keyboard.image !== "blank"
													? `${currentBuild.keyboard.image}`
													: `https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png`
											}
											alt="keyboard-icon"
										/>
									</Link>
									<Link to={`/products/keyboards/${currentBuild.keyboard?.id}`}>
										{currentBuild.keyboard.name}
									</Link>
								</div>
							)}{" "}
						</td>
						<td>{currentBuild.keyboard && <p>${currentBuild.keyboard.price}</p>}</td>
					</tr>
					<tr>
						<td>
							<Link to="/products/switches">Switches</Link>
						</td>
						<td>
							{currentBuild.switches === null ? (
								<Link to="/products/switches">Choose Switches</Link>
							) : (
								<div className="icon-and-title">
									<Link to={`/products/switches/${currentBuild.switches.id}`}>
										<img
											className="keyboard-index-icon"
											src={
												currentBuild.switches.image !== "blank"
													? `${currentBuild.switches.image}`
													: `https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png`
											}
											alt="keyboard-icon"
										/>
									</Link>
									<Link to={`/products/switches/${currentBuild.switches.id}`}>
										{currentBuild.switches.name}
									</Link>
								</div>
							)}
						</td>
						<td>
							{currentBuild.switches && currentBuild.keyboard && (
								<p>
									$
									{calculateSwitchPrices(
										currentBuild.keyboard.layout,
										currentBuild.switches.price_per_switch
									)}
								</p>
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
								<div className="icon-and-title">
									<Link to={`/products/keycaps/${currentBuild.keycaps.id}`}>
										<img
											className="keyboard-index-icon"
											src={
												currentBuild.keycaps.image !== "blank"
													? `${currentBuild.keycaps.image}`
													: `https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png`
											}
											alt="keyboard-icon"
										/>
									</Link>
									<Link to={`/products/keycaps/${currentBuild.keycaps.id}`}>
										{currentBuild.keycaps.name}
									</Link>
								</div>
							)}
						</td>
						<td>
							{currentBuild.keycaps === null ? (
								""
							) : (
								<p>${currentBuild.keycaps.price}</p>
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
