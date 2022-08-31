import React from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

export default function Keyboard({ info, currentBuild, setCurrentBuild }) {
	const navigate = useNavigate();
	return (
		<div>
			<Link to={`/products/keyboards/${info.id}`}>{info.name}</Link>
			<button
				onClick={() => {
					setCurrentBuild({ ...currentBuild, keyboard: info });
					navigate("/list");
				}}
			>
				Add
			</button>
		</div>
	);
}
