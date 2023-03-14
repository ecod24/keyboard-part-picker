import React from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import "./Keyboard.scss";

export default function Keyboard({ info, currentBuild, setCurrentBuild }) {
	const navigate = useNavigate();
	return (
		<tr className="single-keyboard">
			<td>
				<Link to={`/products/keyboards/${info.id}`}>
					<img className="keyboard-index-icon" src={`${info.image}`} alt="keyboard" />
				</Link>
				<Link to={`/products/keyboards/${info.id}`}>{info.name}</Link>
			</td>
			<td>
				<p>{info.brand}</p>
			</td>
			<td>
				<p>{info.layout}</p>
			</td>
			<td>
				<p>${info.price}</p>
			</td>
			<td>
				<button
					onClick={() => {
						setCurrentBuild({ ...currentBuild, keyboard: info });
						navigate("/list");
					}}
				>
					Add
				</button>
			</td>
		</tr>
	);
}
