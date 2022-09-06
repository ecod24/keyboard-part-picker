import React from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import "./Keyboard.css"

export default function Keyboard({ info, currentBuild, setCurrentBuild }) {
	const navigate = useNavigate();
	return (
		<div className="single-keyboard">
			<Link to={`/products/keyboards/${info.id}`}>
				<img className="keyboard-index-icon" src={`${info.image}`} alt="keyboard" />
			</Link>
			<Link to={`/products/keyboards/${info.id}`}>{info.name}</Link>
			<h3>{info.layout}</h3>
			<h3>${info.price}</h3>
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
