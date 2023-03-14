import React from "react";
import "./Home.scss";
import { Link } from "react-router-dom";
export default function Home() {
	return (
		<div className="landingPage">
			<h1 className="landingPage__greeting">Welcome to Keyboard Part Picker!</h1>
			<div className="landingPage__build">
				<div className="landingPage__title">Envision your dream keyboard</div>
				<div className="landingPage__button">
					<Link className="landingPage__link" to={`/builds`}>
						Start Building
					</Link>
				</div>
				<img
					className="landingPage__image"
					src="https://i.ytimg.com/vi/E3aUukZRWJk/maxresdefault.jpg"
					alt="custom keyboard build from Switch and Click's Youtube channel."
				/>
			</div>
			<div className="landingPage__products">
				<div className="landingPage__title">See Products</div>
				<div className="landingPage__description">
					Choose your case, switches, and keycaps to make it your own!
				</div>
				<div className="landingPage__button">
					<Link className="landingPage__link" to={`/products`}>
						Browse Components
					</Link>
				</div>
				<img
					src="https://www.maketecheasier.com/assets/uploads/2019/08/custom-mechanical-keyboard-guide-parts.jpg"
					className="landingPage__image"
					alt="picture of an exploded keyboard containing: keycaps, switches, plate, PCB, and the case housing."
				/>
			</div>
			<div className="landingPage__guides">
				<div className="landingPage__title">Build Guides</div>
				<div className="landingPage__description">
					For those on a budget, or for those in search of the best
				</div>
				<div className="landingPage__image"></div>
			</div>
			<div className="landingPage__recentBuilds">
				<div className="landingPage__title">Recent Builds</div>
				<div className="landingPage__description">See what people are building on KBPP</div>
				<div className="landingPage__image"></div>
			</div>
			<div className="landingPage__popularBuilds">
				<div className="landingPage__title">Popular Builds</div>
				<div className="landingPage__image"></div>
			</div>
		</div>
	);
}
