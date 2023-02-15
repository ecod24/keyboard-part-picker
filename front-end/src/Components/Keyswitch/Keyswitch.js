import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../App.css";

export default function Keyswitch({ info, currentBuild, setCurrentBuild }) {
	const navigate = useNavigate();
	return (
		<tr className="single-keyswitch">
			<td>
				<Link to={`/products/switches/${info.id}`}>
					<img src={`${info.image}`} alt={`${info.name}`} />
				</Link>
				<Link to={`/products/switches/${info.id}`}>{info.name}</Link>
			</td>
			<td>
				{info.brand}
			</td>
			<td>
				{info.type}
			</td>
			<td>
				{info.force}g
			</td>
			<td>
				{info.prelubed ? "Yes" : "No"}
			</td>
			<td>
				${info.price_per_switch}
			</td>
			<td>
				<button
					onClick={() => {
						setCurrentBuild({ ...currentBuild, switches: info });
						navigate("/list");
					}}
				>
					Add
				</button>
			</td>
		</tr>
	);
}
