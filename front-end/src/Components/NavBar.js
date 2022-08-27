import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { useState } from "react";

export default function NavBar() {
	const [current, setCurrent] = useState("home");
	return (
		<nav>
			<Link to="/">
				<img src="https://i.imgur.com/bojPyWU.png" alt="Home Logo" />
			</Link>
			<Link
				to="/list"
				onClick={() => setCurrent("list")}
				className={current === "list" ? "selected" : null}
			>
				Keyboard Builder
			</Link>
			<Link
				to="/guides"
				onClick={() => setCurrent("guides")}
				className={current === "guides" ? "selected" : null}
			>
				Build Guides
			</Link>
			<Link
				to="/builds"
				onClick={() => setCurrent("builds")}
				className={current === "builds" ? "selected" : null}
			>
				Completed Builds
			</Link>
			<Link
				to="/products"
				onClick={() => setCurrent("products")}
				className={current === "products" ? "selected" : null}
			>
				Browse Products
			</Link>
		</nav>
	);
}
