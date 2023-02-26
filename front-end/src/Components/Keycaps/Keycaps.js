import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Keycaps({ info, currentBuild, setCurrentBuild }) {
	const navigate = useNavigate();
	return (
		<tr className="single-keycap">
			<td>
				<Link to={`/products/keycaps/${info.id}`}>{info.name}</Link>
				<Link to={`/products/keycaps/${info.id}`}>
					<img src={`${info.image}`} alt={`${info.name}`} />
				</Link>
			</td>
			<td>
				<p>{info.brand}</p>
			</td>
			<td>
				<p>{info.colors}</p>
			</td>
			<td>
				<p>${info.price}</p>
			</td>
			<td>
				<button
					onClick={() => {
						setCurrentBuild({ ...currentBuild, keycaps: info });
						navigate("/list");
					}}
				>
					Add
				</button>
			</td>
		</tr>
	);
}
