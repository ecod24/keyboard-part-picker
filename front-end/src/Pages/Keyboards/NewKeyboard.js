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
				navigate(`/keyboards`);
			})
			.catch((error) => {
				console.log(error);
			});
	};
	return (
		<div className="keyboard-form">
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
					Layout
					<input id="layout" type="text" name="layout" onChange={handleChange} />
				</label>
				<label>
					Price
					<input id="price" type="number" name="price" onChange={handleChange} />
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
