import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function NewSwitch({ API }) {
	const navigate = useNavigate();
	const [keyswitch, setKeyswitch] = useState({
		name: "",
		brand: "",
		type: "",
		force: 0,
		prelubed: false,
		image: "",
	});
	const handleChange = (event) => {
		setKeyswitch({
			...keyswitch,
			[event.target.id.toLowerCase()]: event.target.value,
		});
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		axios
			.post(`${API}/switches`, keyswitch)
			.then((response) => {
				navigate(`/products/switches`);
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
				<h2>Add a new Switch</h2>
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
					Type
					<input id="type" type="text" name="type" onChange={handleChange} />
				</label>
				<br />
				<label>
					Force
					<input id="force" type="number" name="force" onChange={handleChange} />
				</label>
				<br />
				<label>
					Pre Lubed?
					<input
						id="prelubed"
						type="checkbox"
						name="prelubed"
						onChange={handleCheckboxChange}
					/>
				</label>
				<br />
				<label>
					Image
					<input id="image" type="text" name="image" onChange={handleChange} />
					<br />
					<img src={`${keyswitch.image}`} alt={`${keyswitch.name}`} />
				</label>
				<br />
				<input type="submit" value="Submit" />
			</form>
		</div>
	);
}
