import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";

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
		<div>
			<h1>{keycapInfo.name}</h1>
			<p>{keycapInfo.brand}</p>
			<h2>${keycapInfo.price}</h2>
			<img
				src={`${
					keycapInfo.image !== "blank"
						? keycapInfo.image
						: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"
				}`}
				alt="its probably a keycap set"
			/>
			<Link to="/products/keycaps">
				<button>All Keycaps</button>
			</Link>
			<Link to={`/products/keycaps/${id}/edit`}>
				<button>Edit Info</button>
			</Link>
			<button
				onClick={() => {
					axios.delete(`${API}/keycaps/${id}`);
					navigate("/products/keycaps");
				}}
			>
				Delete
			</button>
		</div>
	);
}
