import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
	return (
		<header>
			<Link to="/">
				<img src="https://i.imgur.com/bojPyWU.png" alt="Home Logo" />
			</Link>
		</header>
	);
}
