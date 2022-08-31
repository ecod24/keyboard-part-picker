import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function NewKeycap({ API }) {
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
	const handleSubmit = (event) => {
		event.preventDefault();
		axios
			.post(`${API}/keycaps`, keycaps)
			.then((response) => {
				navigate(`/keycaps`);
			})
			.catch((error) => {
				console.log(error);
			});
	};
	return (
		<div className="keycaps-form">
			<form onSubmit={handleSubmit}>
				<label>
					Name
					<input id="name" type="text" name="name" onChange={handleChange} />
				</label>
				<label>
					Brand
					<input id="brand" type="text" name="brand" onChange={handleChange} />
				</label>
				<label>
					Price
					<input id="price" type="number" name="price" onChange={handleChange} />
				</label>
				<label>
					Color
					<input id="color" type="number" name="color" onChange={handleChange} />
				</label>
				<label>
					Image
					<input id="image" type="text" name="image" onChange={handleChange} />
				</label>
				<input type="submit" value="Submit" />
			</form>
		</div>
	);
}
