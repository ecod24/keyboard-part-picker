import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

export default function EditKeyboard({ API }) {
	const { id } = useParams();
	const navigate = useNavigate();
	const [keyboard, setKeyboard] = useState({
		name: "",
		brand: "",
		layout: "",
		price: 0,
		image: "",
	});
	useEffect(() => {
		axios
			.get(`${API}/keyboards/${id}`)
			.then((response) => {
				setKeyboard(response.data.payload);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [id]);
	const handleChange = (event) => {
		setKeyboard({
			...keyboard,
			[event.target.id.toLowerCase()]: event.target.value,
		});
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		axios
			.put(`${API}/keyboards/${id}`, keyboard)
			.then((response) => {
				navigate(`/products/keyboards/${id}`);
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
					<input
						id="name"
						type="text"
						name="name"
						onChange={handleChange}
						value={keyboard.name}
					/>
				</label>
				<label>
					Brand
					<input
						id="brand"
						type="text"
						name="brand"
						onChange={handleChange}
						value={keyboard.brand}
					/>
				</label>
				<label>
					Layout
					<input
						id="layout"
						type="text"
						name="layout"
						onChange={handleChange}
						value={keyboard.layout}
					/>
				</label>
				<label>
					Price
					<input
						id="price"
						type="number"
						name="price"
						onChange={handleChange}
						value={keyboard.price}
					/>
				</label>
				<label>
					Image
					<input
						id="image"
						type="text"
						name="image"
						onChange={handleChange}
						value={keyboard.image}
					/>
				</label>
				<input type="submit" value="Submit" />
			</form>
		</div>
	);
}
