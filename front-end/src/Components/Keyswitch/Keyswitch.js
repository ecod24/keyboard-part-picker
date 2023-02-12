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
				<p>{info.brand}</p>
			</td>
			<td>
				<p>{info.type}</p>
			</td>
			<td>
				<p>{info.force}g</p>
			</td>
			<td>
				<p>{info.prelubed ? "Yes" : "No"}</p>
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
