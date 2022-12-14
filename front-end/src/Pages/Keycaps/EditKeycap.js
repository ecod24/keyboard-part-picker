import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";

export default function EditKeycap({ API }) {
	const { id } = useParams();
	const navigate = useNavigate();
	const [keycaps, setKeycaps] = useState({
		name: "",
		brand: "",
		price: 0,
		color: "",
		image: "",
	});
	const handleChange = (event) => {
		setKeycaps({
			...keycaps,
			[event.target.id.toLowerCase()]: event.target.value,
		});
	};
	useEffect(() => {
		axios
			.get(`${API}/keycaps/${id}`)
			.then((response) => {
				setKeycaps(response.data.payload);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [id]);
	const handleSubmit = (event) => {
		event.preventDefault();
		axios
			.put(`${API}/keycaps/${id}`, keycaps)
			.then((response) => {
				navigate(`/products/keycaps/${id}`);
			})
			.catch((error) => {
				console.log(error);
			});
	};
	return (
		<div className="keycaps-form">
			<form onSubmit={handleSubmit}>
				<h2>Edit Keycap Set Information</h2>
				<label>
					Name
					<input
						id="name"
						type="text"
						name="name"
						onChange={handleChange}
						value={keycaps.name}
					/>
				</label>
				<br />
				<label>
					Brand
					<input
						id="brand"
						type="text"
						name="brand"
						onChange={handleChange}
						value={keycaps.brand}
					/>
				</label>
				<br />
				<label>
					Price
					<input
						id="price"
						type="number"
						name="price"
						onChange={handleChange}
						value={keycaps.price}
					/>
				</label>
				<br />
				<label>
					Color
					<input
						id="color"
						type="text"
						name="color"
						onChange={handleChange}
						value={keycaps.color}
					/>
				</label>
				<br />
				<label>
					Image
					<input
						id="image"
						type="text"
						name="image"
						onChange={handleChange}
						value={keycaps.image}
					/>
					<img src={`${keycaps.image}`} alt={`${keycaps.name}`} />
				</label>
				<br />
				<input type="submit" value="Submit" />
			</form>
		</div>
	);
}
