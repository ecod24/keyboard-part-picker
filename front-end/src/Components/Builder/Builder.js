import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../App.css";
import "./Builder.scss";
import axios from "axios";

export default function Builder(props) {
	const { currentBuild, removeFromCart, completedBuild, API } = props;
	const [totalPrice, setTotalPrice] = useState(0);
	const navigate = useNavigate();
	/**
	 *
	 * @param {string} layout - string representation of keyboard layout (60%, 75%, TKL, etc)
	 * @param {Float} pricePerSwitch - price of a single switch
	 * @returns String formatted price of a build's worth of switches
	 */
	const calculateSwitchPrices = (layout = "100%", pricePerSwitch) => {
		//TODO: all layouts
		let numOfKeys = 104; //default 100%
		let totalPriceForBoard = 0.0;
		if (layout === "60%") {
			totalPriceForBoard = 61 * pricePerSwitch;
		} else if (layout === "65%") {
			totalPriceForBoard = 68 * pricePerSwitch;
		} else if (layout === "75%") {
			totalPriceForBoard = 84 * pricePerSwitch;
		} else if (layout === "TKL") {
			totalPriceForBoard = 87 * pricePerSwitch;
		} else if (layout === "96%") {
			totalPriceForBoard = 96 * pricePerSwitch;
		} else {
			totalPriceForBoard = numOfKeys * pricePerSwitch;
		}
		return parseFloat(totalPriceForBoard).toFixed(2);
	};
	const submitBuild = () => {
		console.log(
			"submitting Keyboard id %d, keycaps id %d, switches id %d, and total price %f",
			currentBuild.keyboard.id,
			currentBuild.keycaps.id,
			currentBuild.switches.id,
			totalPrice
		);
		//now actually post to /builds
		const buildInformation = {
			builder_id: 1,
			keyboard_id: currentBuild.keyboard.id,
			switches_id: currentBuild.switches.id,
			keycaps_id: currentBuild.keycaps.id,
			title: "test",
			total_price: totalPrice,
			images: "blank",
		};
		axios
			.post(`${API}/builds`, buildInformation)
			.then(() => {
				//go to completed builds (where this will be the newest item)
				navigate("/builds");
			})
			.catch((err) => console.log(err));
	};
	useEffect(() => {
		if (currentBuild.keyboard && currentBuild.switches) {
			currentBuild.switches["price"] = calculateSwitchPrices(
				currentBuild.keyboard.layout,
				currentBuild.switches.price_per_switch
			);
		}
		setTotalPrice(
			parseFloat(
				Object.entries(currentBuild).reduce((prev, current) => {
					return prev + (current[1]?.price ? parseFloat(current[1]?.price) : 0);
				}, 0)
			).toFixed(2)
		);
	}, [currentBuild, currentBuild.switches, currentBuild.keyboard]);
	return (
		<div className="partList">
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
						<td>
							{/* TODO: find a button component that's clean.. I ain't got time for all that*/}
							{currentBuild.keyboard && (
								<button onClick={() => removeFromCart("keyboard")}>X</button>
							)}
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
						<td>
							{/* TODO: find a button component that's clean.. I ain't got time for all that*/}
							{currentBuild.switches && (
								<button onClick={() => removeFromCart("switches")}>X</button>
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
						<td>
							{/* TODO: find a button component that's clean.. I ain't got time for all that*/}
							{currentBuild.keycaps && (
								<button onClick={() => removeFromCart("keycaps")}>X</button>
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
					<tr>
						<td colSpan={2}></td>
						<td>
							{" "}
							<h3> Total: ${totalPrice}</h3>
						</td>
					</tr>
				</tbody>
			</table>
			{completedBuild && <button onClick={submitBuild}>Submit Build</button>}
		</div>
	);
}
