import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Keycaps({ info, currentBuild, setCurrentBuild }) {
	const navigate = useNavigate();
	return (
		<div>
			<Link to={`/products/keycaps/${info.id}`}>{info.name}</Link>
			<button
				onClick={() => {
					setCurrentBuild({ ...currentBuild, keycaps: info });
					navigate("/list");
				}}
			>
				Add
			</button>
		</div>
	);
}
