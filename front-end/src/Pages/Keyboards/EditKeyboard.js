import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";

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
				<h2>Edit Keyboard Information</h2>
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
				<br />
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
				<br />
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
				<br />
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
				<br />
				<label>
					Image
					<input
						id="image"
						type="text"
						name="image"
						onChange={handleChange}
						value={keyboard.image}
					/>
					<br />
					<img src={`${keyboard.image}`} alt={`${keyboard.name}`} />
				</label>
				<br />
				<input type="submit" value="Submit" />
			</form>
			<Link to={`/products/keyboards/${id}`}>
				<button>Back</button>
			</Link>
		</div>
	);
}
