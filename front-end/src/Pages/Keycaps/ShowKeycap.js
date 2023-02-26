import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import "./ShowKeycap.scss";

export default function ShowKeycap({ API }) {
	const navigate = useNavigate();
	const { id } = useParams();
	const [keycapInfo, setKeycapInfo] = useState({});
	useEffect(() => {
		axios
			.get(`${API}/keycaps/${id}`)
			.then((response) => {
				setKeycapInfo(response.data.payload);
			})
			.catch((error) => {
				console.warn(error);
			});
	}, []);
	return (
		<div className="showKeycap">
			<div className="showKeycap__name">{keycapInfo.name}</div>
			<div className="showKeycap__brand">{keycapInfo.brand}</div>
			<div className="showKeycap__price">${keycapInfo.price}</div>
			<img
				className="showKeycap__image"
				src={`${
					keycapInfo.image !== "blank"
						? keycapInfo.image
						: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"
				}`}
				alt="its probably a keycap set"
			/>
			<div className="showKeycap__colors">Colors in Set: {keycapInfo.colors}</div>
			<div className="showKeycap__buttonsContainer">
				<Link to="/products/keycaps">
					<button>See all keycaps</button>
				</Link>

			</div>
		</div>
	);
}
