import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";
import { useState } from "react";

export default function NavBar() {
	const [current, setCurrent] = useState("home");
	return (
		<nav>
			<div className="navWrapper">
				{/* <div className={current === "home" ? "selected" : null}> */}
					<Link
						to="/"
						onClick={() => setCurrent("home")}
						className={current === "home" ? "selected" : null}
					>
						<img src="https://i.imgur.com/bojPyWU.png" alt="Home Logo" />
					</Link>
				{/* </div> */}
				{/* <div className={current === "list" ? "selected" : null}> */}
					<Link
						to="/list"
						onClick={() => setCurrent("list")}
						className={current === "list" ? "selected" : null}
					>
						Keyboard Builder
					</Link>
				{/* </div> */}
				{/* <div className={current === "guides" ? "selected" : null}> */}
					<Link
						to="/guides"
						onClick={() => setCurrent("guides")}
						className={current === "guides" ? "selected" : null}
					>
						Build Guides
					</Link>
				{/* </div> */}
				{/* <div className={current === "builds" ? "selected" : null}> */}
					<Link
						to="/builds"
						onClick={() => setCurrent("builds")}
						className={current === "builds" ? "selected" : null}
					>
						Completed Builds
					</Link>
				{/* </div> */}
				{/* <div className={current === "products" ? "selected" : null}> */}
					<Link
						to="/products"
						onClick={() => setCurrent("products")}
						className={current === "products" ? "selected" : null}
					>
						Browse Products
					</Link>
				{/* </div> */}
			</div>
		</nav>
	);
}
