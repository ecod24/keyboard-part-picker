import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";

export default function ShowKeyboard({ API }) {
	const navigate = useNavigate();
	const { id } = useParams();
	const [keyboardInfo, setKeyboardInfo] = useState({});
	useEffect(() => {
		axios
			.get(`${API}/keyboards/${id}`)
			.then((response) => {
				setKeyboardInfo(response.data.payload);
			})
			.catch((error) => console.warn(error));
	});
	return (
		<div>
			<h1>{keyboardInfo.name}</h1>
			<p>{keyboardInfo.brand}</p>
			<h2>${keyboardInfo.price}</h2>
			<img
				src={`${
					keyboardInfo.image !== "blank"
						? keyboardInfo.image
						: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"
				}`}
				alt="its probably a keyboard"
			/>
			<Link to="/products/keyboards">
				<button>All Keyboards</button>
			</Link>
			<Link to={`/products/keyboards/${id}/edit`}>
				<button> Edit Info</button>
			</Link>
			<button
				onClick={() => {
					axios.delete(`${API}/keyboards/${id}`);
					navigate("/products/keyboards");
				}}
			>
				Delete
			</button>
		</div>
	);
}
