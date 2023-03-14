import axios from "axios";
import React, { useEffect, useState } from "react";
import Keyboard from "../../Components/Keyboard/Keyboard";
import { Link } from "react-router-dom";
import "./KeyboardIndex.scss";

export default function KeyboardIndex({ API, currentBuild, setCurrentBuild }) {
	const [keyboards, setKeyboards] = useState([]);
	const [loader, setLoader] = useState(false);
	const loaderImg = "https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif";
	const [currentFilter, setCurrentFilter] = useState(false);
	const [brands, setBrands] = useState([]);
	const populateBrands = (arr) => {
		let currentBrands = [];
		for (let entry of arr) {
			if (!currentBrands.includes(entry.brand)) {
				currentBrands.push(entry.brand);
			}
		}
		return currentBrands;
	};
	useEffect(() => {
		setLoader(false);
		axios
			.get(`${API}/keyboards`)
			.then((response) => {
				setKeyboards(response.data.payload);
				setBrands(populateBrands(keyboards));
				setLoader(true);
			})
			.catch((error) => console.log(error));
	}, []);
	return (
		<>
			<h1>Choose a Keyboard</h1>
			<div className="keyboardIndex">
				<div className="filterContainer">
					<h3>Filters</h3>
					<ul className="filterContainer__list">
						<li className="filterContainer__singleOption">
							<label>
								<input type="checkbox" value="all" />
								All
							</label>
						</li>
						{brands.map((brand) => {
							return (
								<li className="filterContainer__singleOption">
									<label>
										<input type="checkbox" value={brand} />
										{brand}
									</label>
								</li>
							);
						})}
					</ul>
				</div>
				{loader ? (
					<div>
						<Link className="add" to="/products/keyboards/new">
							Add Custom Keyboard
						</Link>
						<br />
						<table>
							<thead>
								<tr>
									<th>Name</th>
									<th>Brand</th>
									<th>Layout</th>
									<th>Price</th>
								</tr>
							</thead>
							<tbody>
								{keyboards.map((item, index) => {
									return (
										<Keyboard
											info={item}
											key={index}
											currentBuild={currentBuild}
											setCurrentBuild={setCurrentBuild}
										/>
									);
								})}
							</tbody>
						</table>
					</div>
				) : (
					<img className="pageLoader" src={loaderImg} alt="loading..." />
				)}
			</div>
		</>
	);
}
