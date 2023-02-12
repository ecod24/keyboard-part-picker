import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";

export default function ShowSwitch({ API }) {
	const navigate = useNavigate();
	const { id } = useParams();
	const [switchInfo, setSwitchInfo] = useState({});
	useEffect(() => {
		axios
			.get(`${API}/switches/${id}`)
			.then((response) => {
				setSwitchInfo(response.data.payload);
			})
			.catch((error) => {
				console.warn(error);
			});
	}, []);
	return (
		<div>
			<h1>{switchInfo.name}</h1>
			<p>{switchInfo.brand}</p>
			<h2>${switchInfo.price_per_switch} per switch</h2>
			<img
				src={`${
					switchInfo.image !== "blank"
						? switchInfo.image
						: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"
				}`}
				alt="its probably a switch"
			/>
			<Link to="/products/switches">
				<button>All Switches</button>
			</Link>
			<Link to={`/products/switches/${id}/edit`}>
				<button>Edit Info</button>
			</Link>
			<button
				onClick={() => {
					axios.delete(`${API}/switches/${id}`);
					navigate("/products/switches");
				}}
			>
				Delete
			</button>
		</div>
	);
}
