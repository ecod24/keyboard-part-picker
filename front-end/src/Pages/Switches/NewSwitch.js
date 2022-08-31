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
				navigate(`/switches`);
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
					<input id="name" type="text" name="name" onChange={handleChange} />
				</label>
				<label>
					Brand
					<input id="brand" type="text" name="brand" onChange={handleChange} />
				</label>
				<label>
					Type
					<input id="type" type="text" name="type" onChange={handleChange} />
				</label>
				<label>
					Force
					<input id="force" type="number" name="force" onChange={handleChange} />
				</label>
				<label>
					Pre Lubed?
					<input
						id="prelubed"
						type="checkbox"
						name="prelubed"
						onChange={handleCheckboxChange}
					/>
				</label>
				<input type="submit" value="Submit" />
			</form>
		</div>
	);
}
