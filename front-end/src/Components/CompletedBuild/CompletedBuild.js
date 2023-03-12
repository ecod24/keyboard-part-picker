import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./CompletedBuild.scss";

function CompletedBuild({ buildInfo, API }) {
	const { id, builder_id, keyboard_id, switches_id, keycaps_id, title, total_price, images } =
		buildInfo;
	const [keyboard, setKeyboard] = useState({});
	const [keycaps, setKeycaps] = useState({});
	const [switches, setSwitches] = useState({});
	useEffect(() => {
		axios
			.get(`${API}/keyboards/${keyboard_id}`)
			.then((response) => setKeyboard(response.data.payload))
			.catch((error) => console.log(error));
		axios
			.get(`${API}/switches/${switches_id}`)
			.then((response) => setSwitches(response.data.payload))
			.catch((error) => console.log(error));
		axios
			.get(`${API}/keycaps/${keycaps_id}`)
			.then((response) => setKeycaps(response.data.payload))
			.catch((error) => console.log(error));
	});
	return (
		<div class="container">
			<Link to={`/builds/${id}`}>
				<img
					class="container__image"
					src={
						images !== "blank"
							? images
							: "https://www.popsci.com/uploads/2022/02/12/mechanical-keyboard-with-rbg.jpg?auto=webp&width=1440&height=1080"
					}
					alt={`Picture of build: ${title}`}
				/>
			</Link>
			<div class="container__title">{title}</div>
			<div class="container__details">
				<div class="container__singleDetail">
					{" "}
					<span class="container__category">Keyboard: </span>
					{keyboard.name}
				</div>
				<div class="container__singleDetail">
					{" "}
					<span class="container__category">Keycaps :</span> {keycaps.name}
				</div>
				<div class="container__singleDetail">
					{" "}
					<span class="container__category">Switches: </span> {switches.name}
				</div>
				<div class="container__singleDetail">
					{" "}
					<span class="container__category">Price: </span> ${total_price}
				</div>
			</div>
		</div>
	);
}

export default CompletedBuild;
