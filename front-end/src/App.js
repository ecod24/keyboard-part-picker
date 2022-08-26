import React from "react";
import { Routes, Route } from "react-router";
import Builder from "./Pages/Builder";
import Builds from "./Pages/Builds";
import Guides from "./Pages/Guides";
import NavBar from "./Components/NavBar";
import Products from "./Pages/Products";
import Header from "./Components/Header";
import Home from "./Pages/Home";

const API = process.env.REACT_APP_API_URL;

export default function App() {
	return (
		<div>
			{/* <Header /> */}
			<NavBar />
			<Routes>
				<Route path="/" element={<Home API={API} />} />
				<Route path="/list" element={<Builder API={API} />} />
				<Route path="/guides" element={<Guides API={API} />} />
				<Route path="/builds" element={<Builds API={API} />} />
				<Route path="/browse" element={<Products API={API} />} />
			</Routes>
		</div>
	);
}
