import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function NewKeyboard({ API }) {
	const navigate = useNavigate();
	const [keyboard, setKeyboard] = useState({
		name: "",
		brand: "",
		layout: "",
		price: 0,
		image: "",
	});
	const handleChange = (event) => {
		setKeyboard({
			...keyboard,
			[event.target.id.toLowerCase()]: event.target.value,
		});
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		axios
			.post(`${API}/keyboards`, keyboard)
			.then((response) => {
				navigate(`/products/keyboards`);
			})
			.catch((error) => {
				console.log(error);
			});
	};
	return (
		<div className="keyboard-form">
			<form onSubmit={handleSubmit}>
				<h2>Add a new Keyboard</h2>
				<label>
					Name
					<input id="name" type="text" name="name" onChange={handleChange} />
				</label>
				<br />
				<label>
					Brand
					<input id="brand" type="text" name="brand" onChange={handleChange} />
				</label>
				<br />
				<label>
					Layout
					<input id="layout" type="text" name="layout" onChange={handleChange} />
				</label>
				<br />
				<label>
					Price
					<input id="price" type="number" name="price" onChange={handleChange} />
				</label>
				<br />
				<label>
					Image
					<input id="image" type="text" name="image" onChange={handleChange} />
					<br />
					<img src={`${keyboard.image}`} alt={`${keyboard.name}`} />
				</label>
				<br />
				<input type="submit" value="Submit" />
			</form>
		</div>
	);
}
