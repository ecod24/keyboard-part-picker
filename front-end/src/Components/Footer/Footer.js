import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

function Footer() {
	return (
		<footer className="footerContainer">
			<div className="footerContainer__logo">Logo</div>
			<div className="footerContainer__siteLinks">
				<div className="footerContainer__linksTitle">Categories</div>
				<div>
					<Link to="/products">Products</Link>
				</div>
				<div>
					<Link to="/builds">Completed Builds</Link>
				</div>
				<div>
					<Link to="/builder">Make your own Build</Link>
				</div>
				<div>
					<Link to="/guides">Build Guides</Link>
				</div>
			</div>
			<div className="footerContainer__personalLinks">Links to About me/Contact us/etc</div>
		</footer>
	);
}

export default Footer;
