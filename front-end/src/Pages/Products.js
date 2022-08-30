import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Products({ API }) {
	return (
		<div>
			<h1>Products</h1>
			<Link to="/products/keyboards">
				<h2>Keyboards</h2>
				<img src="" alt="Keyboard" />
			</Link>
			<Link to="/products/switches">
				<h2>Switches</h2>
				<img src="" alt="Keyboard switches" />
			</Link>
			<Link to="/products/keycaps">
				<h2>Keycaps</h2>
				<img src="" alt="Keycaps for a keyboard" />
			</Link>
		</div>
	);
}
