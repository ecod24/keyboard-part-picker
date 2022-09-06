import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";

export default function EditSwitch({ API }) {
	const { id } = useParams();
	const navigate = useNavigate();
	const [keyswitch, setKeyswitch] = useState({
		name: "",
		brand: "",
		type: "",
		force: 0,
		prelubed: false,
		image: "",
	});
	useEffect(() => {
		axios
			.get(`${API}/switches/${id}`)
			.then((response) => {
				setKeyswitch(response.data.payload);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [id]);
	const handleChange = (event) => {
		setKeyswitch({
			...keyswitch,
			[event.target.id.toLowerCase()]: event.target.value,
		});
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		axios
			.put(`${API}/switches/${id}`, keyswitch)
			.then((response) => {
				navigate(`/products/switches/${id}`);
			})
			.catch((error) => {
				console.log(error);
			});
	};
	const handleCheckboxChange = (event) => {
		setKeyswitch({ ...keyswitch, prelubed: !keyswitch.prelubed });
	};
	return (
		<div className="switches-form">
			<form onSubmit={handleSubmit}>
				<label>
					Name
					<input
						id="name"
						type="text"
						name="name"
						onChange={handleChange}
						value={keyswitch.name}
					/>
				</label>
				<label>
					Brand
					<input
						id="brand"
						type="text"
						name="brand"
						onChange={handleChange}
						value={keyswitch.brand}
					/>
				</label>
				<label>
					Type
					<input
						id="type"
						type="text"
						name="type"
						onChange={handleChange}
						value={keyswitch.type}
					/>
				</label>
				<label>
					Force
					<input
						id="force"
						type="number"
						name="force"
						onChange={handleChange}
						value={keyswitch.force}
					/>
				</label>
				<label>
					Pre Lubed?
					<input
						id="prelubed"
						type="checkbox"
						name="prelubed"
						onChange={handleCheckboxChange}
						value={keyswitch.prelubed}
					/>
				</label>
				<label>
					Image
					<input
						id="image"
						type="text"
						name="image"
						onChange={handleChange}
						value={keyswitch.image}
					/>
					<img src={`${keyswitch.image}`} alt={`${keyswitch.name}`} />
				</label>
				<input type="submit" value="Submit" />
			</form>
		</div>
	);
}
