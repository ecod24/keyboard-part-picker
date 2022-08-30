import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Keyswitch({ info, currentBuild, setCurrentBuild }) {
	const navigate = useNavigate();
	return (
		<div>
			<Link to={`/products/switches/${info.id}`}>{info.name}</Link>
			<button
				onClick={() => {
					setCurrentBuild({ ...currentBuild, switches: info });
					navigate("/list");
				}}
			>
				Add
			</button>
		</div>
	);
}
