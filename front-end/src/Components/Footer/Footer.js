import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

function Footer() {
	return (
		<footer className="footerContainer">
			<div className="footerContainer__logo">
				<div className="footerContainer__copyrights">
					© Keyboard Part Picker (KBPP) 2023
				</div>
			</div>
			<div className="footerContainer__siteLinks">
				<div className="footerContainer__linksTitle">Categories</div>
				<div className="footerContainer__link">
					<Link to="/products">Products</Link>
				</div>
				<div className="footerContainer__link">
					<Link to="/builds">Completed Builds</Link>
				</div>
				<div className="footerContainer__link">
					<Link to="/builder">Make your own Build</Link>
				</div>
				<div className="footerContainer__link">
					<Link to="/guides">Build Guides</Link>
				</div>
			</div>
			<div className="footerContainer__personalLinks">
				<div className="footerContainer__linksTitle">Contact Me</div>
				<div className="footerContainer__link">
					<a
						href="https://linkedin.com/in/ecodrington24"
						rel="noreferrer"
						target="_blank"
					>
						LinkedIn
					</a>
				</div>
				<div className="footerContainer__link">
					<a href="https://github.com/ecod24" rel="noreferrer" target="_blank">
						Github
					</a>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
