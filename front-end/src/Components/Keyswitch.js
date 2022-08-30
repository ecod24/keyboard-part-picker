import React from "react";
import { Link } from "react-router-dom";

export default function Keyswitch({ info, currentBuild, setCurrentBuild }) {
	return (
		<div>
			<Link to={`/products/switches/${info.id}`}>{info.name}</Link>
			<button
				onClick={() => {
					setCurrentBuild({ ...currentBuild, switches: info });
				}}
			>
				Add
			</button>
		</div>
	);
}
