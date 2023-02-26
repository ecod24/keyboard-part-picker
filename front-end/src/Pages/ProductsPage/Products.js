import React from "react";
import { Link } from "react-router-dom";
import "./Products.scss";

export default function Products({ API }) {
	//TODO: instead of having unreliable images here, consider using images from products' DB for each
	return (
		<>
			{" "}
			<h1>Products</h1>
			<div className="products">
				<Link className="products__categoryContainer" to="/products/keyboards">
					<h2 className="products__title">Keyboards</h2>
					<img
						src="https://assets.reedpopcdn.com/gmmk2.jpg/BROK/resize/1200x1200%3E/format/jpg/quality/70/gmmk2.jpg"
						alt="Keyboard"
					/>
				</Link>
				<Link className="products__categoryContainer" to="/products/switches">
					<h2 className="products__title">Switches</h2>
					<img
						src="https://www.zdnet.com/a/img/resize/1d2d7639efaaaec617164251ad523958d31bc34a/2022/04/21/9e89b0fb-7113-4e4c-aefc-49e394ea687f/numerous-mechanical-keyboard-switches.jpg?auto=webp&width=1200"
						alt="Keyboard switches"
					/>
				</Link>
				<Link className="products__categoryContainer" to="/products/keycaps">
					<h2 className="products__title">Keycaps</h2>
					<img
						src="https://cdn.mos.cms.futurecdn.net/WyFTo562VVkhQhawcWv2sE.jpg"
						alt="Keycaps for a keyboard"
					/>
				</Link>
			</div>
		</>
	);
}
