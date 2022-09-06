import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { useState } from "react";

export default function NavBar() {
	const [current, setCurrent] = useState("home");
	return (
		<nav>
			<div>

				<Link
					to="/"
					onClick={() => setCurrent("home")}
					className={current === "home" ? "selected" : null}
				>
					<img src="https://i.imgur.com/bojPyWU.png" alt="Home Logo" />
				</Link>
			</div>
			<div>

				<Link
					to="/list"
					onClick={() => setCurrent("list")}
					className={current === "list" ? "selected" : null}
				>
					Keyboard Builder
				</Link>
			</div>
			<div>

				<Link
					to="/guides"
					onClick={() => setCurrent("guides")}
					className={current === "guides" ? "selected" : null}
				>
					Build Guides
				</Link>
			</div>
			<div>
				{" "}
				<Link
					to="/builds"
					onClick={() => setCurrent("builds")}
					className={current === "builds" ? "selected" : null}
				>
					Completed Builds
				</Link>
			</div>{" "}
			<div>
				{" "}
				<Link
					to="/products"
					onClick={() => setCurrent("products")}
					className={current === "products" ? "selected" : null}
				>
					Browse Products
				</Link>
			</div>
		</nav>
	);
}
